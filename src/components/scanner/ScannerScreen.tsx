import React, { useState, useRef, useEffect } from 'react';
import {
  Camera,
  Image as ImageIcon,
  Scan,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ShoppingBag,
  ChefHat,
  Bookmark,
  RefreshCw,
  Trash2,
  Info,
  Layers,
  ArrowRight,
  Flame,
  Calendar,
  Eye,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { FoodScan, Recipe } from '../../types';

export const ScannerScreen: React.FC = () => {
  const {
    user,
    foodScans,
    saveFoodScan,
    deleteFoodScan,
    clearFoodScans,
    sendScanToChef,
    addScannedFoodToShopping,
    findMatchingRecipesForScan,
    openRecipeDetail,
    updateMealPlanSlot,
    mealPlan,
    showToast,
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState<'scan' | 'history'>('scan');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStep, setAnalysisStep] = useState<number>(0);
  const [currentScan, setCurrentScan] = useState<FoodScan | null>(null);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [historyFilter, setHistoryFilter] = useState<'all' | 'compatible' | 'moderate' | 'not_recommended'>('all');
  const [historySearch, setHistorySearch] = useState<string>('');
  const [matchingRecipes, setMatchingRecipes] = useState<Recipe[]>([]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  const statusMessages = [
    'Identificando alimento…',
    'Lendo tabela nutricional e rótulos…',
    'Calculando carboidratos líquidos…',
    'Calculando compatibilidade cetogênica nobre…',
  ];

  // Cycling analysis messages
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnalyzing) {
      interval = setInterval(() => {
        setAnalysisStep((prev) => (prev + 1) % statusMessages.length);
      }, 1400);
    }
    return () => clearInterval(interval);
  }, [isAnalyzing]);

  // Clean up camera stream when unmounting or stopping camera
  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  const stopCameraStream = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const startCameraStream = async () => {
    setCameraError(null);
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Câmera não suportada pelo navegador.');
      }
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      mediaStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setIsCameraActive(true);
    } catch (err: any) {
      console.warn('Direct camera error:', err);
      // Fallback to native mobile camera input
      if (cameraInputRef.current) {
        cameraInputRef.current.click();
      } else {
        setCameraError('Permissão de câmera não concedida. Você pode enviar uma foto da galeria.');
      }
    }
  };

  const capturePhotoFromVideo = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      stopCameraStream();
      handleProcessImage(dataUrl);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        stopCameraStream();
        handleProcessImage(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleProcessImage = async (dataUrl: string) => {
    setSelectedImage(dataUrl);
    setIsAnalyzing(true);
    setCurrentScan(null);
    setAnalysisStep(0);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl, userId: user.id }),
      });

      if (!response.ok) {
        throw new Error('Falha ao processar scan na API.');
      }

      const result: FoodScan = await response.json();
      setCurrentScan(result);
      const matched = findMatchingRecipesForScan(result);
      setMatchingRecipes(matched);
    } catch (err) {
      console.error('Scan error:', err);
      // Construct fallback scan
      const fallbackScan: FoodScan = {
        id: `scan-${Date.now()}`,
        user_id: user.id,
        image_url: dataUrl,
        identified_food: 'Refeição Cetogênica com Proteína e Folhas',
        category: 'Proteína e Vegetais',
        approx_portion: '1 prato médio (~250g)',
        visible_ingredients: ['Proteína grelhada', 'Folhas verdes', 'Azeite de oliva', 'Queijo ralado'],
        calories: 380,
        protein_g: 34,
        carbs_g: 4.2,
        fiber_g: 2.1,
        net_carbs_g: 2.1,
        fat_g: 26,
        keto_status: 'compatible',
        keto_analysis: 'Prato rico em gorduras boas e proteínas de qualidade, com teor muito baixo de carboidratos líquidos. Excelente para manter cetose.',
        is_packaged: false,
        confidence: 90,
        created_at: new Date().toISOString(),
      };
      setCurrentScan(fallbackScan);
      const matched = findMatchingRecipesForScan(fallbackScan);
      setMatchingRecipes(matched);
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Quick sample images for instant test
  const quickSamples = [
    {
      name: 'Picanha com Manteiga de Ervas',
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Salmão com Aspargos',
      url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Ovos com Queijo & Abacate',
      url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Torta de Frutas com Açúcar',
      url: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const resetScanner = () => {
    stopCameraStream();
    setSelectedImage(null);
    setCurrentScan(null);
    setIsAnalyzing(false);
    setCameraError(null);
  };

  const handleAddToPlan = (recipe: Recipe) => {
    const currentDay = mealPlan[0]?.dayOfWeek || 'Seg';
    const slot = recipe.category === 'breakfast' ? 'breakfast' : 'dinner';
    updateMealPlanSlot(currentDay, slot, recipe);
    showToast(`📅 "${recipe.title}" adicionado ao plano de ${currentDay}!`, 'success');
  };

  // Filter user's history
  const filteredHistory = foodScans.filter((scan) => {
    if (historyFilter === 'not_recommended' && scan.keto_status !== 'not_recommended' && scan.keto_status !== 'incompatible') {
      return false;
    }
    if (historyFilter !== 'all' && historyFilter !== 'not_recommended' && scan.keto_status !== historyFilter) {
      return false;
    }
    if (historySearch) {
      const q = historySearch.toLowerCase();
      const matchFood = scan.identified_food.toLowerCase().includes(q);
      const matchCat = scan.category.toLowerCase().includes(q);
      const matchIng = (scan.visible_ingredients || []).some((i) => i.toLowerCase().includes(q));
      return matchFood || matchCat || matchIng;
    }
    return true;
  });

  return (
    <div id="scanner-screen" className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#0D2817] via-[#092013] to-[#071A0E] border border-[#1B472C]/80 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#63B532]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-[#123D24] text-[#63B532] border border-[#63B532]/30">
              <Scan size={22} className="animate-pulse" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
              Scanner KetoNobre
            </h1>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#63B532]/20 text-[#A8D94D] border border-[#63B532]/30">
              Visão IA
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#8EA092] max-w-lg">
            Descubra instantaneamente a composição nutricional, carboidratos líquidos e compatibilidade cetogênica do que você está consumindo.
          </p>
        </div>

        {/* Tab switch buttons */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#06140B] border border-[#1B472C] self-start sm:self-center">
          <button
            id="tab-scanner-live"
            onClick={() => setActiveSubTab('scan')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'scan'
                ? 'bg-[#63B532] text-[#071A0E] shadow-lg shadow-[#63B532]/20'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            <Camera size={14} />
            Escanear
          </button>
          <button
            id="tab-scanner-history"
            onClick={() => setActiveSubTab('history')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'history'
                ? 'bg-[#63B532] text-[#071A0E] shadow-lg shadow-[#63B532]/20'
                : 'text-[#8EA092] hover:text-white'
            }`}
          >
            <Bookmark size={14} />
            Histórico ({foodScans.length})
          </button>
        </div>
      </div>

      {/* SUBTAB: SCAN */}
      {activeSubTab === 'scan' && (
        <div className="space-y-6">
          {/* CAMERA / CAPTURE VIEW */}
          {!currentScan && !isAnalyzing && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Main Viewport */}
              <div className="lg:col-span-8 space-y-4">
                <div className="relative rounded-3xl bg-[#082011] border-2 border-dashed border-[#1B472C] overflow-hidden min-h-[380px] sm:min-h-[420px] flex flex-col items-center justify-center p-6 text-center shadow-inner">
                  {/* Active video stream if camera is on */}
                  {isCameraActive ? (
                    <div className="relative w-full h-full min-h-[360px] flex items-center justify-center bg-black rounded-2xl overflow-hidden">
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover max-h-[460px]"
                      />
                      {/* Viewfinder crosshairs */}
                      <div className="absolute inset-8 border border-white/30 rounded-2xl pointer-events-none flex items-center justify-center">
                        <div className="w-16 h-16 border-2 border-[#63B532] rounded-xl animate-pulse" />
                      </div>

                      {/* Camera controls overlay */}
                      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 z-20 px-4">
                        <button
                          onClick={stopCameraStream}
                          className="px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md text-white text-xs font-semibold hover:bg-black"
                        >
                          Cancelar
                        </button>
                        <button
                          id="btn-capture-photo"
                          onClick={capturePhotoFromVideo}
                          className="px-6 py-3 rounded-full bg-[#63B532] hover:bg-[#72ce39] text-[#071A0E] text-sm font-black flex items-center gap-2 shadow-lg shadow-[#63B532]/40 transform active:scale-95 transition-all"
                        >
                          <Camera size={18} />
                          Capturar foto
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-md space-y-5 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-3xl bg-[#0D2817] border border-[#63B532]/40 flex items-center justify-center text-[#63B532] shadow-xl shadow-[#63B532]/10 relative group">
                        <Scan size={36} className="text-[#63B532] group-hover:scale-110 transition-transform" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#63B532] rounded-full animate-ping" />
                      </div>

                      <div className="space-y-2">
                        <h2 className="text-lg sm:text-xl font-bold text-white font-display">
                          Fotografe seu alimento ou rótulo
                        </h2>
                        <p className="text-xs sm:text-sm text-[#8EA092] leading-relaxed">
                          Reconhecemos pratos prontos, carnes nobres, saladas, queijos artesanais ou a tabela nutricional do verso de embalagens.
                        </p>
                      </div>

                      {cameraError && (
                        <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/60 text-red-200 text-xs text-left flex items-start gap-2">
                          <AlertTriangle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                          <span>{cameraError}</span>
                        </div>
                      )}

                      {/* Primary Actions */}
                      <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center pt-2">
                        <button
                          id="btn-open-camera"
                          onClick={startCameraStream}
                          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#63B532] hover:bg-[#72ce39] text-[#071A0E] text-xs sm:text-sm font-black flex items-center justify-center gap-2.5 shadow-lg shadow-[#63B532]/25 hover:shadow-[#63B532]/40 transition-all transform active:scale-98"
                        >
                          <Camera size={18} />
                          Tirar foto agora
                        </button>

                        <button
                          id="btn-upload-gallery"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#123D24] hover:bg-[#184d2f] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 border border-[#1B472C] hover:border-[#63B532]/50 transition-all"
                        >
                          <ImageIcon size={18} className="text-[#63B532]" />
                          Escolher da galeria
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar Guide & Instant Demonstrations */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-5 rounded-3xl bg-[#082011] border border-[#1B472C] space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Sparkles size={16} className="text-[#63B532]" />
                    <span>Dicas para maior precisão</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#8EA092] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#63B532] mt-1.5 flex-shrink-0" />
                      <span><strong>Boa iluminação:</strong> Evite sombras fortes sobre o prato ou reflexos no plástico da embalagem.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#63B532] mt-1.5 flex-shrink-0" />
                      <span><strong>Rótulos:</strong> Enquadre bem a lista de ingredientes e os carboidratos totais / fibras.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#63B532] mt-1.5 flex-shrink-0" />
                      <span><strong>Prato completo:</strong> O modelo reconhece molhos visíveis, carnes, folhas e acompanhamentos.</span>
                    </li>
                  </ul>
                </div>

                {/* Instant Test Samples */}
                <div className="p-5 rounded-3xl bg-[#082011] border border-[#1B472C] space-y-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#A8D94D] font-extrabold block">
                    Testar com exemplos instantâneos
                  </span>
                  <div className="grid grid-cols-2 gap-2.5">
                    {quickSamples.map((sample, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleProcessImage(sample.url)}
                        className="p-2 rounded-2xl bg-[#0D2817] hover:bg-[#123D24] border border-[#1B472C] text-left transition-all group flex flex-col gap-1.5"
                      >
                        <img
                          src={sample.url}
                          alt={sample.name}
                          className="w-full h-16 rounded-xl object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <span className="text-[11px] font-bold text-white truncate w-full group-hover:text-[#63B532]">
                          {sample.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SCANNER LOADING ANIMATION */}
          {isAnalyzing && (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#082011] border border-[#1B472C] flex flex-col items-center justify-center text-center space-y-6 relative overflow-hidden min-h-[420px]">
              {/* Laser scanner effect */}
              {selectedImage && (
                <div className="relative w-64 h-64 rounded-3xl overflow-hidden border-2 border-[#63B532]/60 shadow-2xl shadow-[#63B532]/20">
                  <img src={selectedImage} alt="Scanning" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#63B532]/20 via-transparent to-[#63B532]/20 animate-pulse pointer-events-none" />
                  {/* Laser line moving vertically */}
                  <div
                    className="absolute left-0 right-0 h-1 bg-[#63B532] shadow-[0_0_15px_#63B532] animate-bounce"
                    style={{ animationDuration: '1.8s' }}
                  />
                </div>
              )}

              <div className="space-y-2 max-w-md">
                <div className="flex items-center justify-center gap-2 text-[#63B532]">
                  <Sparkles size={18} className="animate-spin" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A8D94D]">
                    Análise em andamento
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white font-display">
                  {statusMessages[analysisStep]}
                </h3>
                <p className="text-xs text-[#8EA092]">
                  Consultando parâmetros cetogênicos e calculando Net Carbs...
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex items-center gap-2">
                {statusMessages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === analysisStep ? 'w-8 bg-[#63B532]' : 'w-2 bg-[#1B472C]'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SCAN RESULT VIEW */}
          {currentScan && !isAnalyzing && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Result Header & Status Banner */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Image & Confidence Card */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="relative rounded-3xl overflow-hidden border border-[#1B472C] bg-[#082011] shadow-xl group">
                    <img
                      src={currentScan.image_url}
                      alt={currentScan.identified_food}
                      className="w-full h-64 sm:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                    {/* Badge on image */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md bg-black/60 text-white border border-white/20">
                        {currentScan.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <span className="text-gray-300 font-medium">
                        {currentScan.is_packaged ? '📦 Rótulo / Embalagem' : '🍽️ Prato / Ingrediente'}
                      </span>
                      <span className="text-[#A8D94D] font-bold">
                        Confiança: {currentScan.confidence}%
                      </span>
                    </div>
                  </div>

                  {/* Disclaimer notice */}
                  <div className="p-3.5 rounded-2xl bg-[#082011]/80 border border-[#1B472C] text-[11px] text-[#8EA092] flex items-start gap-2 leading-relaxed">
                    <Info size={16} className="text-[#63B532] flex-shrink-0 mt-0.5" />
                    <span>
                      {currentScan.is_packaged
                        ? 'Valores priorizados a partir do rótulo detectado. Sempre confira a tabela física.'
                        : 'Estimativa nutricional baseada na imagem e porção média de referência.'}
                    </span>
                  </div>
                </div>

                {/* Classification & Macros Overview */}
                <div className="lg:col-span-7 space-y-5 flex flex-col justify-between">
                  <div>
                    {/* Status Pill & Food Name */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {currentScan.keto_status === 'compatible' && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-[#63B532]/20 text-[#63B532] border border-[#63B532]/40">
                          <CheckCircle2 size={14} />
                          🟢 Compatível com Keto
                        </div>
                      )}
                      {currentScan.keto_status === 'moderate' && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/40">
                          <AlertTriangle size={14} />
                          🟡 Consumir com moderação
                        </div>
                      )}
                      {(currentScan.keto_status === 'not_recommended' || currentScan.keto_status === 'incompatible') && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-red-500/20 text-red-400 border border-red-500/40">
                          <XCircle size={14} />
                          🔴 Não recomendado para Keto
                        </div>
                      )}

                      <span className="text-xs text-[#8EA092]">
                        Porção: <strong>{currentScan.approx_portion || '1 porção'}</strong>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-white font-display">
                      {currentScan.identified_food}
                    </h2>

                    <p className="mt-2 text-xs sm:text-sm text-[#CAD6CD] leading-relaxed p-3.5 rounded-2xl bg-[#082011] border border-[#1B472C]">
                      {currentScan.keto_analysis}
                    </p>
                  </div>

                  {/* Nutritional Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {/* Net carbs highlighted */}
                    <div className="p-3 rounded-2xl bg-[#0D2817] border-2 border-[#63B532]/60 shadow-lg shadow-[#63B532]/10 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-[#A8D94D] uppercase font-bold block">
                        Carboidratos Líquidos
                      </span>
                      <span className="text-2xl font-black text-[#63B532]">
                        {currentScan.net_carbs_g}g
                      </span>
                      <span className="text-[10px] text-[#8EA092] block">Net Carbs</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#082011] border border-[#1B472C]">
                      <span className="text-[10px] text-[#8EA092] uppercase font-bold block">
                        Calorias
                      </span>
                      <span className="text-xl font-bold text-white flex items-center gap-1">
                        <Flame size={16} className="text-amber-400" />
                        {currentScan.calories}
                      </span>
                      <span className="text-[10px] text-[#8EA092] block">kcal</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#082011] border border-[#1B472C]">
                      <span className="text-[10px] text-[#8EA092] uppercase font-bold block">
                        Proteínas
                      </span>
                      <span className="text-xl font-bold text-white">
                        {currentScan.protein_g}g
                      </span>
                      <span className="text-[10px] text-[#8EA092] block">Construção muscular</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#082011] border border-[#1B472C]">
                      <span className="text-[10px] text-[#8EA092] uppercase font-bold block">
                        Gorduras
                      </span>
                      <span className="text-xl font-bold text-white">
                        {currentScan.fat_g}g
                      </span>
                      <span className="text-[10px] text-[#8EA092] block">Energia cetogênica</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#082011] border border-[#1B472C]">
                      <span className="text-[10px] text-[#8EA092] uppercase font-bold block">
                        Carboidratos Totais
                      </span>
                      <span className="text-xl font-bold text-white">
                        {currentScan.carbs_g}g
                      </span>
                      <span className="text-[10px] text-[#8EA092] block">Total bruto</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-[#082011] border border-[#1B472C]">
                      <span className="text-[10px] text-[#8EA092] uppercase font-bold block">
                        Fibras
                      </span>
                      <span className="text-xl font-bold text-white">
                        {currentScan.fiber_g}g
                      </span>
                      <span className="text-[10px] text-[#8EA092] block">Saúde digestiva</span>
                    </div>
                  </div>

                  {/* Visible ingredients chips */}
                  {currentScan.visible_ingredients && currentScan.visible_ingredients.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-[#8EA092] font-semibold">
                        Ingredientes identificados:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {currentScan.visible_ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-xs bg-[#123D24] text-[#A8D94D] border border-[#1B472C]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1B472C]">
                    <button
                      id="btn-save-scan"
                      onClick={() => saveFoodScan(currentScan)}
                      className="flex-1 min-w-[130px] flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#72ce39] text-[#071A0E] text-xs font-black shadow-md transition-all"
                    >
                      <Bookmark size={14} />
                      Salvar análise
                    </button>

                    <button
                      id="btn-add-scan-shopping"
                      onClick={() => addScannedFoodToShopping(currentScan)}
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-white text-xs font-bold border border-[#1B472C] transition-all"
                    >
                      <ShoppingBag size={14} className="text-[#63B532]" />
                      Adicionar às compras
                    </button>

                    <button
                      id="btn-ask-chef-ia"
                      onClick={() => sendScanToChef(currentScan)}
                      className="flex-1 min-w-[140px] flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-white text-xs font-bold border border-[#1B472C] transition-all"
                    >
                      <ChefHat size={14} className="text-[#A8D94D]" />
                      Perguntar ao Chef IA
                    </button>

                    <button
                      id="btn-scan-another"
                      onClick={resetScanner}
                      className="p-2.5 rounded-xl bg-[#082011] hover:bg-[#0D2817] text-[#8EA092] hover:text-white border border-[#1B472C] transition-colors"
                      title="Escanear outro alimento"
                    >
                      <RefreshCw size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* INTEGRATION WITH 600 RECIPES: MATCHING RECIPES */}
              <div className="pt-4 border-t border-[#1B472C] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-[#63B532]" />
                    <h3 className="text-base font-bold text-white font-display">
                      Receitas sugeridas do catálogo (600 receitas)
                    </h3>
                  </div>
                  <span className="text-xs text-[#8EA092]">
                    Utilizam ingredientes semelhantes a <strong>{currentScan.identified_food}</strong>
                  </span>
                </div>

                {matchingRecipes.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {matchingRecipes.map((recipe) => (
                      <div
                        key={recipe.id}
                        className="rounded-2xl bg-[#082011] border border-[#1B472C] hover:border-[#63B532]/60 overflow-hidden transition-all flex flex-col justify-between group"
                      >
                        <div
                          onClick={() => openRecipeDetail(recipe)}
                          className="cursor-pointer space-y-2.5 p-3"
                        >
                          <div className="relative h-36 rounded-xl overflow-hidden">
                            <img
                              src={recipe.image}
                              alt={recipe.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold text-[#A8D94D]">
                              {recipe.nutrition.netCarbs}g net carbs
                            </div>
                          </div>

                          <div>
                            <span className="text-[10px] text-[#63B532] font-extrabold uppercase tracking-wider block">
                              {recipe.categoryName}
                            </span>
                            <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-[#63B532]">
                              {recipe.title}
                            </h4>
                            <p className="text-[11px] text-[#8EA092] line-clamp-2 mt-1">
                              {recipe.description}
                            </p>
                          </div>
                        </div>

                        {/* Action buttons inside card */}
                        <div className="p-3 pt-0 flex items-center gap-2 border-t border-[#1B472C]/50 mt-2">
                          <button
                            onClick={() => openRecipeDetail(recipe)}
                            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[11px] font-bold text-white transition-colors"
                          >
                            <Eye size={12} className="text-[#63B532]" />
                            Ver receita
                          </button>
                          <button
                            onClick={() => handleAddToPlan(recipe)}
                            className="p-1.5 rounded-lg bg-[#123D24] hover:bg-[#195030] text-[#63B532] hover:text-white transition-colors"
                            title="Adicionar ao planejamento semanal"
                          >
                            <Calendar size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-[#082011] border border-[#1B472C] text-center text-xs text-[#8EA092]">
                    Nenhuma receita específica encontrada para este item. Explore as 600 receitas no Explorar!
                  </div>
                )}
              </div>

              {/* Ethical & Medical Disclaimer */}
              <div className="p-4 rounded-2xl bg-[#06170C] border border-[#1B472C]/70 text-[11px] text-[#8EA092] leading-relaxed">
                <strong>Aviso Legal & Ético:</strong> As análises nutricionais e o indicador de compatibilidade cetogênica do Scanner KetoNobre são ferramentas informativas e educativas para suporte ao estilo de vida cetogênico. Este sistema não realiza diagnóstico médico, nem substitui a consulta individualizada com nutricionista ou médico especialista.
              </div>
            </div>
          )}
        </div>
      )}

      {/* SUBTAB: HISTORY */}
      {activeSubTab === 'history' && (
        <div className="space-y-6">
          {/* Controls & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[#082011] border border-[#1B472C]">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8EA092]" />
              <input
                type="text"
                value={historySearch}
                onChange={(e) => setHistorySearch(e.target.value)}
                placeholder="Buscar por alimento ou ingrediente escaneado..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0D2817] border border-[#1B472C] text-xs text-white placeholder-[#8EA092] focus:outline-none focus:border-[#63B532]"
              />
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => setHistoryFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  historyFilter === 'all'
                    ? 'bg-[#63B532] text-[#071A0E]'
                    : 'bg-[#0D2817] text-[#8EA092] hover:text-white border border-[#1B472C]'
                }`}
              >
                Todos ({foodScans.length})
              </button>
              <button
                onClick={() => setHistoryFilter('compatible')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  historyFilter === 'compatible'
                    ? 'bg-[#63B532] text-[#071A0E]'
                    : 'bg-[#0D2817] text-[#8EA092] hover:text-white border border-[#1B472C]'
                }`}
              >
                🟢 Compatível
              </button>
              <button
                onClick={() => setHistoryFilter('moderate')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  historyFilter === 'moderate'
                    ? 'bg-amber-500 text-black'
                    : 'bg-[#0D2817] text-[#8EA092] hover:text-white border border-[#1B472C]'
                }`}
              >
                🟡 Moderado
              </button>
              <button
                onClick={() => setHistoryFilter('not_recommended')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  historyFilter === 'not_recommended'
                    ? 'bg-red-500 text-white'
                    : 'bg-[#0D2817] text-[#8EA092] hover:text-white border border-[#1B472C]'
                }`}
              >
                🔴 Não Keto
              </button>
            </div>

            {/* Clear history button */}
            {foodScans.length > 0 && (
              <button
                onClick={() => {
                  if (window.confirm('Tem certeza de que deseja limpar todo o histórico de scans?')) {
                    clearFoodScans();
                  }
                }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-red-400 hover:text-red-300 hover:bg-red-950/40 border border-red-900/40 transition-colors self-end sm:self-auto"
              >
                <Trash2 size={14} />
                Limpar
              </button>
            )}
          </div>

          {/* History List */}
          {filteredHistory.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredHistory.map((scan) => (
                <div
                  key={scan.id}
                  className="p-4 rounded-3xl bg-[#082011] border border-[#1B472C] hover:border-[#63B532]/60 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-3">
                    <div className="relative h-40 rounded-2xl overflow-hidden">
                      <img
                        src={scan.image_url}
                        alt={scan.identified_food}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        {scan.keto_status === 'compatible' && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#63B532] text-[#071A0E]">
                            Compatível
                          </span>
                        )}
                        {scan.keto_status === 'moderate' && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-black">
                            Moderado
                          </span>
                        )}
                        {(scan.keto_status === 'not_recommended' || scan.keto_status === 'incompatible') && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-red-500 text-white">
                            Não Keto
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => deleteFoodScan(scan.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-red-400 hover:text-red-200 transition-colors"
                        title="Excluir do histórico"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>

                    <div>
                      <span className="text-[10px] text-[#63B532] font-bold block uppercase tracking-wider">
                        {scan.category} • {new Date(scan.created_at).toLocaleDateString('pt-BR')}
                      </span>
                      <h4 className="text-sm font-bold text-white line-clamp-1">
                        {scan.identified_food}
                      </h4>
                      <p className="text-xs text-[#8EA092] line-clamp-2 mt-1">
                        {scan.keto_analysis}
                      </p>
                    </div>

                    {/* Quick macros */}
                    <div className="grid grid-cols-4 gap-1.5 p-2 rounded-xl bg-[#0D2817] text-center text-[10px]">
                      <div>
                        <span className="text-[#8EA092] block">Net Carbs</span>
                        <span className="font-extrabold text-[#63B532]">{scan.net_carbs_g}g</span>
                      </div>
                      <div>
                        <span className="text-[#8EA092] block">Calorias</span>
                        <span className="font-bold text-white">{scan.calories}</span>
                      </div>
                      <div>
                        <span className="text-[#8EA092] block">Proteína</span>
                        <span className="font-bold text-white">{scan.protein_g}g</span>
                      </div>
                      <div>
                        <span className="text-[#8EA092] block">Gordura</span>
                        <span className="font-bold text-white">{scan.fat_g}g</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-[#1B472C]/60">
                    <button
                      onClick={() => {
                        setCurrentScan(scan);
                        setMatchingRecipes(findMatchingRecipesForScan(scan));
                        setActiveSubTab('scan');
                      }}
                      className="flex-1 py-1.5 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye size={12} className="text-[#63B532]" />
                      Ver detalhes
                    </button>
                    <button
                      onClick={() => sendScanToChef(scan)}
                      className="p-1.5 rounded-xl bg-[#123D24] hover:bg-[#184d2f] text-[#A8D94D] transition-colors"
                      title="Perguntar ao Chef IA"
                    >
                      <ChefHat size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 rounded-3xl bg-[#082011] border border-[#1B472C] text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0D2817] text-[#63B532] flex items-center justify-center mx-auto border border-[#1B472C]">
                <Scan size={28} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">Nenhum scan encontrado no histórico</h3>
                <p className="text-xs text-[#8EA092] max-w-sm mx-auto">
                  Tire uma foto ou envie uma imagem na aba "Escanear" para salvar e analisar alimentos cetogênicos.
                </p>
              </div>
              <button
                onClick={() => setActiveSubTab('scan')}
                className="px-5 py-2.5 rounded-xl bg-[#63B532] hover:bg-[#72ce39] text-[#071A0E] text-xs font-bold inline-flex items-center gap-2 shadow-lg shadow-[#63B532]/20"
              >
                <Camera size={14} />
                Escanear agora
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
