import React, { useState } from 'react';
import logo from './assets/djoglo_kotak.jpg';
import nuansa1 from './assets/nuansa/Susana Djoglo_8.jpg'
import nuansa2 from './assets/nuansa/Susana Djoglo_12.jpg'
import nuansa3 from './assets/nuansa/Susana Djoglo_15.jpg'
import nuansa4 from './assets/nuansa/Susana Djoglo_17.jpg'
import nuansa5 from './assets/nuansa/Susana Djoglo_19.jpg'
import nuansa6 from './assets/nuansa/Susana Djoglo_22.jpg'
import aviary1 from "./assets/hewan/Hewan_1.jpg"
import aviary2 from "./assets/hewan/Hewan_2.jpg"
import aviary3 from "./assets/hewan/Hewan_3.jpg"
import aviary4 from "./assets/hewan/Hewan_4.jpg"
import aviary5 from "./assets/hewan/Hewan_5.jpg"
import aviary6 from "./assets/hewan/Hewan_6.jpg"
import antik1 from "./assets/antik/Barang Antik_1.jpg"
import antik2 from "./assets/antik/Barang Antik_3.jpg"
import antik3 from "./assets/antik/Barang Antik_4.jpg"
import antik4 from "./assets/antik/Barang Antik_5.jpg"
import antik5 from "./assets/antik/Barang Antik_6.jpg"
import antik6 from "./assets/antik/Barang Antik_7.jpg"
import menu1 from "./assets/paket/Es Krim.jpg"
import menu2 from "./assets/paket/Menu Makanan dan Minuman.jpg"
import menu3 from "./assets/paket/Minuman, Jus, Kopi.jpg"
import menu4 from "./assets/paket/Paket Wedding.jpg"
import card4 from "./assets/cardnuansa/Card_4.jpg"
import heroImage from './assets/heroimage/Depan_2.jpg'; // tambahkan gambar hero yang menarik
import ayamBakar from './assets/ayam_bakar.jpg'; // gambar menu nasi timbel
import menuGurame from './assets/gurameh_bakar.jpg'; // gambar gurame
import menuAyamGeprek from './assets/ayam_geprek.jpg'; // gambar mendoan
import esTeh from './assets/es_teh.jpg';
import esJeruk from './assets/es_jeruk.jpg';
import ingkungAyam from './assets/ingkung_ayam.jpg';
import nuansaImage from './assets/cardnuansa/Card_1.jpg'; // gambar nuansa djoglo
import kolamImage from './assets/cardnuansa/Card_2.jpg'; // gambar kolam ikan
import galeriImage from './assets/cardnuansa/Card_3.jpg'; // gambar galeri antik
import iconig from './assets/icon/instagram.png';
import iconponsel from './assets/icon/ponsel.png';
import icontiktok from './assets/icon/tiktok.png';
import iconwa from './assets/icon/whatsapp.png';
// Data untuk gallery foto
const galleryData = {
  nuansa: [
    { id: 1, image: nuansa6, title: "Nuansa Djoglo 1", desc: "Ornamen Gerbang Masuk" },
    { id: 2, image: nuansa2, title: "Nuansa Djoglo 2", desc: "Suasana Aula" },
    { id: 3, image: nuansa3, title: "Nuansa Djoglo 3", desc: "Suasana Aula & Kolam" },
    { id: 4, image: nuansa4, title: "Nuansa Djoglo 4", desc: "Suasana Gazebo Belakang" },
    { id: 5, image: nuansa5, title: "Nuansa Djoglo 5", desc: "Suasana Aula" },
    { id: 6, image: nuansa1, title: "Nuansa Djoglo 6", desc: "Suasana Gazebo" },
    
  ],
  kolam: [
    { id: 1, image: aviary1, title: "Aviary Mini 1", desc: "Kolam ikan koi" },
    { id: 2, image: aviary2, title: "Aviary Mini 2", desc: "Ayam Hias" },
    { id: 3, image: aviary3, title: "Aviary Mini 3", desc: "Ayam Hias" },
    { id: 4, image: aviary4, title: "Aviary Mini 4", desc: "Ayam Hias" },
    { id: 5, image: aviary5, title: "Aviary Mini 5", desc: "Ayam Hias" },
    { id: 6, image: aviary6, title: "Aviary Mini 6", desc: "Burung hias" },
  ],
  galeri: [
    { id: 1, image: antik1, title: "Galeri Antik 1", desc: "Dokar Antik" },
    { id: 2, image: antik2, title: "Galeri Antik 2", desc: "Koleksi Cangkir Antik" },
    { id: 3, image: antik3, title: "Galeri Antik 3", desc: "Koleksi Cangkir Antik" },
    { id: 4, image: antik4, title: "Galeri Antik 4", desc: "Koleksi Cangkir Antik" },
    { id: 5, image: antik5, title: "Galeri Antik 5", desc: "Perabotan Antik" },
    { id: 6, image: antik6, title: "Galeri Antik 6", desc: "Meja Makan Antik" },
  ],
  daftarmenu: [
    { id: 1, image: menu2, title: "Menu Makanan", desc: "Berbagai Macam Menu Masakan Nusantara" },
    { id: 2, image: menu3, title: "Menu Minuman", desc: "Berbagai Macam Minuman Racikan Nusantara" },
    { id: 3, image: menu4, title: "Paket Wedding", desc: "Pilihan Paket Wwdding" },
    { id: 4, image: menu1, title: "Menu EsKrim", desc: "Aneka Rasa Eskrim" },
  ]
};

const App = () => {
  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalImages, setModalImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Palet Warna: #7EACB5, #FFF4EA, #EDDCC6, #BF4646
  
  // Data sosial media dan kontak
  const socialData = {
    instagram: "https://www.instagram.com/djoglobanteran_?igsh=NGtpZmlrYzZjaWNo",
    tiktok: "https://www.tiktok.com/@newdjoglo_banteran?_r=1&_t=ZS-9455kfjxwQ6",
    whatsapp: "6285169934088", // Format internasional tanpa +
    whatsappText: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20menu..."
  };

  const menus = [
    { 
      nama: "Ayam Bakar", 
      desc: "Ayam pilihan dibakar dengan bumbu rempah khas hingga meresap sempurna, menghasilkan cita rasa manis gurih dengan aroma smokey yang menggoda.", 
      harga: "Rp 28.000",
      image: ayamBakar,
      popular: true,
      waMessage: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20Ayam%20Bakar"
    },
    { 
      nama: "Gurame Bakar", 
      desc: "Ikan gurame segar dibakar dengan olesan bumbu spesial, dagingnya lembut dengan rasa gurih manis yang pas di lidah.", 
      harga: "Rp 45.000",
      image: menuGurame,
      popular: true,
      waMessage: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20Gurame%20Bakar"
    },
    { 
      nama: "Ayam Geprek", 
      desc: "Ayam goreng crispy yang digeprek dengan sambal pedas mantap, siap bikin lidah bergoyang dan nagih terus.", 
      harga: "Rp 15.000",
      image: menuAyamGeprek,
      popular: false,
      waMessage: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20Ayam%20Geprek"
    },
    { 
      nama: "Es Teh", 
      desc: "Teh pilihan disajikan dingin dan segar—teman sempurna untuk menemani setiap hidangan.", 
      harga: "Rp 8.000",
      image: esTeh,
      popular: false,
      waMessage: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20Es%20Teh"
    },
    { 
      nama: "Es Jeruk", 
      desc: "Perasan jeruk segar dengan rasa manis asam yang menyegarkan, cocok diminum kapan saja.", 
      harga: "Rp 8.000",
      image: esJeruk,
      popular: false,
      waMessage: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20Es%20Jeruk"
    },
    { 
      nama: "Ingkung Ayam Kampung", 
      desc: "Ayam kampung utuh dimasak dengan bumbu rempah tradisional khas Jawa, menghasilkan rasa autentik, gurih, dan penuh kehangatan.", 
      harga: "Rp 85.000",
      image: ingkungAyam,
      popular: true,
      waMessage: "Halo%20Djoglo%20Banteran%2C%20saya%20mau%20pesan%20Ingkung%20Ayam%20Kampung"
    },
  ];

  const styles = {
    container: { 
      backgroundColor: '#FFF4EA', 
      fontFamily: "'Poppins', 'Arial', sans-serif", 
      color: '#2C3E50', 
      margin: 0, 
      padding: 0,
      overflowX: 'hidden'
    },
    navbar: { 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '20px 8%', 
      backgroundColor: 'rgba(255, 244, 234, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #EDDCC6', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logo: {
      height: '50px',
      width: '50px',
      borderRadius: '50%',
      border: '3px solid #BF4646',
      padding: '2px',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    navTitle: { 
      color: '#BF4646', 
      fontWeight: '700', 
      fontSize: '1.4rem',
      letterSpacing: '1px',
      textShadow: '2px 2px 4px rgba(191,70,70,0.1)'
    },
    navMenu: {
      display: 'flex',
      gap: '40px',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#7EACB5'
    },
    navItem: {
      cursor: 'pointer',
      padding: '5px 0',
      borderBottom: '2px solid transparent',
      transition: 'all 0.3s ease'
    },
    hero: { 
      height: '90vh', 
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #7EACB5 0%, #BF4646 100%)',
    },
    heroImg: { 
      position: 'absolute', 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
      opacity: 0.4,
      transform: 'scale(1.1)',
      animation: 'zoom 20s infinite alternate'
    },
    heroContent: { 
      position: 'relative', 
      textAlign: 'center', 
      color: 'white', 
      padding: '0 20px',
      maxWidth: '900px',
      zIndex: 2
    },
    heroPreTitle: {
      fontSize: '1.2rem',
      color: '#EDDCC6',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      marginBottom: '10px',
      fontWeight: '300'
    },
    heroH1: { 
      fontSize: '5rem', 
      margin: '0 0 20px 0', 
      textShadow: '4px 4px 8px rgba(0,0,0,0.3)',
      fontWeight: '800',
      lineHeight: '1.2'
    },
    heroP: { 
      fontSize: '1.3rem', 
      color: '#EDDCC6', 
      letterSpacing: '2px',
      marginBottom: '40px',
      fontWeight: '400'
    },
    heroButton: { 
      backgroundColor: '#BF4646', 
      color: 'white', 
      padding: '18px 45px', 
      border: 'none', 
      borderRadius: '50px', 
      fontWeight: '700',
      fontSize: '1.1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 25px rgba(191,70,70,0.4)',
      letterSpacing: '1px'
    },
    highlightSection: { 
      padding: '80px 8%', 
      backgroundColor: '#EDDCC6',
      display: 'flex', 
      flexDirection: 'row',
      flexWrap: 'nowrap',
      gap: '30px',
      marginTop: '-50px',
      position: 'relative',
      zIndex: 10,
      borderRadius: '50px 50px 0 0',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollBehavior: 'smooth',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'thin',
      msOverflowStyle: 'auto',
    },

    highlightCard: { 
      backgroundColor: 'white', 
      padding: '0 0 35px 0', 
      borderRadius: '20px', 
      width: '280px', // Sedikit diperkecil agar 4 card muat dalam satu row
      textAlign: 'center', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },

    highlightImage: {
      width: '100%',
      height: '180px', // Tinggi gambar sedikit dikurangi
      objectFit: 'cover',
      marginBottom: '20px',
      transition: 'transform 0.5s ease'
    },

    highlightIcon: {
      fontSize: '2rem',
      marginBottom: '10px',
      color: '#BF4646'
    },

    viewGalleryBtn: {
      display: 'inline-block',
      marginTop: '15px',
      padding: '8px 20px',
      backgroundColor: '#7EACB5',
      color: 'white',
      borderRadius: '25px',
      fontSize: '0.85rem', // Font sedikit diperkecil
      fontWeight: '600',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },

    sectionTitle: { 
      textAlign: 'center', 
      color: '#BF4646', 
      fontSize: '3rem', 
      marginTop: '80px', 
      marginBottom: '20px',
      fontWeight: '800',
      position: 'relative'
    },
    underline: { 
      width: '100px', 
      height: '4px', 
      background: 'linear-gradient(90deg, #7EACB5, #BF4646)',
      margin: '0 auto 50px',
      borderRadius: '2px'
    },
    menuGrid: { 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '40px', 
      padding: '0 8% 80px 8%', 
      maxWidth: '1400px', 
      margin: '0 auto' 
    },
    menuCard: { 
      backgroundColor: 'white', 
      borderRadius: '25px', 
      overflow: 'hidden', 
      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease',
      position: 'relative'
    },
    popularBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#BF4646',
      color: 'white',
      padding: '8px 18px',
      borderRadius: '30px',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      zIndex: 2,
      boxShadow: '0 4px 15px rgba(191,70,70,0.3)'
    },
    cardImg: { 
      height: '250px', 
      overflow: 'hidden',
      position: 'relative'
    },
    cardImgOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)'
    },
    cardContent: { 
      padding: '30px' 
    },
    menuHeader: { 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '15px' 
    },
    menuName: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#7EACB5',
      margin: 0
    },
    menuPrice: { 
      color: '#BF4646', 
      fontWeight: '800',
      fontSize: '1.3rem'
    },
    btnWA: { 
      width: '100%', 
      padding: '15px', 
      backgroundColor: '#BF4646', 
      color: 'white', 
      border: 'none', 
      borderRadius: '12px', 
      fontWeight: '700',
      fontSize: '1rem',
      cursor: 'pointer', 
      marginTop: '20px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    mapContainer: { 
      padding: '80px 8%', 
      backgroundColor: '#EDDCC6',
      position: 'relative'
    },
    mapFlex: { 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '60px', 
      alignItems: 'center', 
      maxWidth: '1200px', 
      margin: '0 auto' 
    },
    mapText: { 
      flex: '1', 
      minWidth: '300px' 
    },
    mapFrame: { 
      flex: '1.5', 
      minWidth: '300px', 
      height: '450px', 
      borderRadius: '25px', 
      overflow: 'hidden', 
      border: '8px solid white',
      boxShadow: '0 30px 60px rgba(0,0,0,0.2)'
    },
    contactInfo: {
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      padding: '20px 30px',
      backgroundColor: 'white',
      borderRadius: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      border: '2px solid transparent',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
    },
    contactIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#FFF4EA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem'
    },
    contactText: {
      fontSize: '1.1rem',
      color: '#333'
    },
    // Style untuk gambar jika ingin menggunakan gambar dari import
    contactImage: {
      width: '30px',
      height: '30px',
      objectFit: 'contain'
    },
    contactImageTik: {
      width: '60px',
      height: '60px',
      objectFit: 'contain'
    },
    footer: { 
      background: 'linear-gradient(135deg, #7EACB5, #5f8a94)',
      color: 'white', 
      padding: '60px 8% 40px',
      textAlign: 'center',
      position: 'relative'
    },
    footerContent: {
      maxWidth: '600px',
      margin: '0 auto'
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '30px 0'
    },
    socialIcon: {
      width: '50px',
      height: '50px',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.8rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      color: 'white'
    },
    socialIconImage: {
      width: '30px',
      height: '30px',
      
    },
    socialIconImageTik: {
      width: '60px',
      height: '60px',
      objectFit: 'contain'
    },
    waFloatImage: {
      width: '35px',
      height: '35px',

    },
    waFloat: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: '#25D366',
      color: 'white',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      cursor: 'pointer',
      boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
      zIndex: 999,
      transition: 'all 0.3s ease',
      border: '3px solid white',
      textDecoration: 'none'
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px'
    },
    modalContent: {
      backgroundColor: '#FFF4EA',
      borderRadius: '30px',
      maxWidth: '1200px',
      width: '95%',
      maxHeight: '90vh',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
    },
    modalHeader: {
      padding: '25px 30px',
      borderBottom: '2px solid #EDDCC6',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'white'
    },
    modalTitle: {
      fontSize: '2rem',
      color: '#BF4646',
      fontWeight: '700',
      margin: 0
    },
    modalClose: {
      background: 'none',
      border: 'none',
      fontSize: '2.5rem',
      cursor: 'pointer',
      color: '#7EACB5',
      transition: 'all 0.3s ease',
      lineHeight: '1'
    },
    modalBody: {
      padding: '30px',
      overflowY: 'auto',
      maxHeight: 'calc(90vh - 120px)'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      marginTop: '10px'
    },
    galleryItem: {
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent'
    },
    galleryItemImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    galleryItemContent: {
      padding: '15px',
      textAlign: 'center'
    },
    galleryItemTitle: {
      color: '#7EACB5',
      fontSize: '1.1rem',
      fontWeight: '600',
      margin: '0 0 5px 0'
    },
    galleryItemDesc: {
      color: '#666',
      fontSize: '0.9rem',
      margin: 0
    },
    // Lightbox Styles
    lightboxOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2100,
      cursor: 'pointer'
    },
    lightboxContent: {
      position: 'relative',
      maxWidth: '90vw',
      maxHeight: '90vh'
    },
    lightboxImage: {
      maxWidth: '100%',
      maxHeight: '90vh',
      objectFit: 'contain',
      borderRadius: '10px'
    },
    lightboxClose: {
      position: 'absolute',
      top: '-40px',
      right: '0',
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      color: 'white',
      cursor: 'pointer'
    },
    lightboxTitle: {
      position: 'absolute',
      bottom: '-40px',
      left: '0',
      color: 'white',
      fontSize: '1.1rem',
      margin: 0
    }
  };

  // Fungsi untuk membuka modal gallery
  const openGallery = (type, title) => {
    let images = [];
    switch(type) {
      case 'nuansa':
        images = galleryData.nuansa;
        break;
      case 'kolam':
        images = galleryData.kolam;
        break;
      case 'galeri':
        images = galleryData.galeri;
        break;
      case 'daftarmenu':
        images = galleryData.daftarmenu;
      break;
      default:
        images = [];
    }
    setModalImages(images);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Fungsi untuk membuka lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Fungsi untuk membuka WhatsApp
  const openWhatsApp = (message) => {
    const waUrl = `https://wa.me/${socialData.whatsapp}?text=${message || socialData.whatsappText}`;
    window.open(waUrl, '_blank');
  };

  // Fungsi untuk membuka Instagram
  const openInstagram = () => {
    window.open(socialData.instagram, '_blank');
  };

  // Fungsi untuk membuka TikTok
  const openTikTok = () => {
    window.open(socialData.tiktok, '_blank');
  };

  const handleButtonHover = (e, isHover) => {
    if (isHover) {
      e.target.style.backgroundColor = '#9f3a3a';
      e.target.style.transform = 'translateY(-3px)';
      e.target.style.boxShadow = '0 15px 35px rgba(191,70,70,0.5)';
    } else {
      e.target.style.backgroundColor = '#BF4646';
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 8px 25px rgba(191,70,70,0.4)';
    }
  };

  const handleNavHover = (e, isHover) => {
    if (isHover) {
      e.target.style.color = '#BF4646';
      e.target.style.borderBottom = '2px solid #BF4646';
    } else {
      e.target.style.color = '#7EACB5';
      e.target.style.borderBottom = '2px solid transparent';
    }
  };

  // Scroll ke section
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <div style={styles.logoContainer}>
          <img 
            src={logo} 
            alt="Logo" 
            style={styles.logo}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            onClick={() => scrollToSection('home')}
          />
          <span style={styles.navTitle}>DJOGLO BANTERAN</span>
        </div>
        <div style={styles.navMenu}>
          <span 
            style={styles.navItem}
            onMouseEnter={(e) => handleNavHover(e, true)}
            onMouseLeave={(e) => handleNavHover(e, false)}
            onClick={() => scrollToSection('home')}
          >
            HOME
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={(e) => handleNavHover(e, true)}
            onMouseLeave={(e) => handleNavHover(e, false)}
            onClick={() => scrollToSection('menu')}
          >
            MENU
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={(e) => handleNavHover(e, true)}
            onMouseLeave={(e) => handleNavHover(e, false)}
            onClick={() => scrollToSection('lokasi')}
          >
            LOKASI
          </span>
          <span 
            style={styles.navItem}
            onMouseEnter={(e) => handleNavHover(e, true)}
            onMouseLeave={(e) => handleNavHover(e, false)}
            onClick={() => scrollToSection('kontak')}
          >
            KONTAK
          </span>
        </div>
      </nav>

      {/* HERO SECTION - HOME */}
      <header id="home" style={styles.hero}>
        <img src={heroImage} alt="Background" style={styles.heroImg} />
        <div style={styles.heroContent}>
          <p style={styles.heroPreTitle}>WARISAN RASA TRADISIONAL</p>
          <h1 style={styles.heroH1}>Djoglo Banteran</h1>
          <p style={styles.heroP}>✨ Pengalaman Kuliner Klasik di Tengah Sawah ✨</p>
          <button 
            style={styles.heroButton}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={() => openWhatsApp()}
          >
            🍽️ RESERVASI SEKARANG
          </button>
        </div>
      </header>

      {/* HIGHLIGHTS - Dengan fitur klik untuk lihat galeri */}
      <section style={styles.highlightSection}>
        {/* Nuansa Djoglo Card */}
        <div 
          style={styles.highlightCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px)';
            e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.2)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
          }}
        >
          <img src={nuansaImage} alt="Nuansa Djoglo" style={styles.highlightImage} />
          <div style={{ padding: '0 15px 20px 15px' }}>
            <div style={styles.highlightIcon}>🏠</div>
            <h4 style={styles.cardTitle}>Nuansa Djoglo</h4>
            <p style={styles.cardDescription}>
              Arsitektur kayu klasik yang nyaman dan sejuk dengan sentuhan modern khas Jawa
            </p>
            <button 
              style={styles.viewGalleryBtn}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#BF4646';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#7EACB5';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => openGallery('nuansa', 'Nuansa Djoglo')}
            >
              📸 Lihat Galeri Foto
            </button>
          </div>
        </div>

        {/* Kolam Ikan Card */}
        <div 
          style={styles.highlightCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px)';
            e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.2)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
          }}
        >
          <img src={kolamImage} alt="Kolam Ikan" style={styles.highlightImage} />
          <div style={{ padding: '0 15px 20px 15px' }}>
            <div style={styles.highlightIcon}>🐟</div>
            <h4 style={styles.cardTitle}>Aviary Mini</h4>
            <p style={styles.cardDescription}>
              Aviary dengan berbagai jenis hewan yang menambah keindahan dan ketenangan
            </p>
            <button 
              style={styles.viewGalleryBtn}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#BF4646';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#7EACB5';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => openGallery('kolam', 'Aviary Mini')}
            >
              📸 Lihat Galeri Foto
            </button>
          </div>
        </div>

        {/* Galeri Antik Card */}
        <div 
          style={styles.highlightCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px)';
            e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.2)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
          }}
        >
          <img src={galeriImage} alt="Galeri Antik" style={styles.highlightImage} />
          <div style={{ padding: '0 15px 20px 15px' }}>
            <div style={styles.highlightIcon}>🖼️</div>
            <h4 style={styles.cardTitle}>Galeri Antik</h4>
            <p style={styles.cardDescription}>
              Koleksi barang seni dan antik bernilai sejarah tinggi dari berbagai masa
            </p>
            <button 
              style={styles.viewGalleryBtn}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#BF4646';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#7EACB5';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => openGallery('galeri', 'Galeri Antik')}
            >
              📸 Lihat Galeri Foto
            </button>
          </div>
        </div>

        {/* Menu Paket*/}
        <div 
          style={styles.highlightCard}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-15px)';
            e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.2)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
            e.currentTarget.querySelector('img').style.transform = 'scale(1)';
          }}
        >
          <img src={card4} alt="Daftar Menu" style={styles.highlightImage} />
          <div style={{ padding: '0 15px 20px 15px' }}>
            <div style={styles.highlightIcon}>🍽️</div>
            <h4 style={styles.cardTitle}>Daftar Menu</h4>
            <p style={styles.cardDescription}>
              Pilihan Daftar Menu dan Paket
            </p>
            <button 
              style={styles.viewGalleryBtn}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#BF4646';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#7EACB5';
                e.target.style.transform = 'scale(1)';
              }}
              onClick={() => openGallery('daftarmenu', 'Daftar Menu')}
            >
              📸 Lihat Galeri Foto
            </button>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <h2 id="menu" style={styles.sectionTitle}>Menu Spesial</h2>
      <div style={styles.underline}></div>
      
      <div style={styles.menuGrid}>
        {menus.map((item, index) => (
          <div 
            key={index} 
            style={styles.menuCard}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-15px)';
              e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
            }}
          >
            {item.popular && <div style={styles.popularBadge}>🔥 POPULER</div>}
            <div style={styles.cardImg}>
              <img 
                src={item.image || logo} 
                alt="Menu" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={styles.cardImgOverlay}></div>
            </div>
            <div style={styles.cardContent}>
              <div style={styles.menuHeader}>
                <h3 style={styles.menuName}>{item.nama}</h3>
                <span style={styles.menuPrice}>{item.harga}</span>
              </div>
              <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.desc}</p>
              <button 
                style={styles.btnWA}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#9f3a3a';
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#BF4646';
                  e.target.style.transform = 'scale(1)';
                }}
                onClick={() => openWhatsApp(item.waMessage)}
              >
                <span>📱</span> Pesan via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* LOCATION SECTION - UPDATED MAPS LINK */}
      <section id="lokasi" style={styles.mapContainer}>
        <div style={styles.mapFlex}>
          <div style={styles.mapText}>
            <h2 style={{ color: '#BF4646', fontSize: '3rem', marginBottom: '20px', fontWeight: '800' }}>Lokasi</h2>
            <p style={{ lineHeight: '1.8', color: '#444', fontSize: '1.1rem' }}>
              Temukan kami di <strong style={{color: '#7EACB5'}}>Banteran, Sumbang</strong>. 
              Berlokasi strategis dengan pemandangan sawah yang asri, 
              sangat cocok untuk makan siang keluarga atau acara spesial Anda.
            </p>
            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '15px' }}>
              <p style={{ margin: '5px 0' }}><strong>📍 Alamat:</strong></p>
              <p style={{ margin: '5px 0', color: '#666' }}>Banteran, Kec. Sumbang</p>
              <p style={{ margin: '5px 0', color: '#666' }}>Kabupaten Banyumas, Jawa Tengah</p>
              <p style={{ marginTop: '15px', color: '#7EACB5' }}><strong>🕒 Buka:</strong> Senin - Minggu, 10.00 - 22.00</p>
            </div>
          </div>
          <div style={styles.mapFrame}>
            <iframe 
              title="Maps New Djoglo Banteran"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8406798836514!2d109.2555011!3d-7.3618491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f0050664405%3A0xbb2ba37462e94fda!2sNew%20Djoglo%20Banteran!5e0!3m2!1sid!2sid!4v1700000000000" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kontak" style={{ padding: '80px 8%', backgroundColor: '#FFF4EA' }}>
      <h2 style={styles.sectionTitle}>Hubungi Kami</h2>
      <div style={styles.underline}></div>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={styles.contactInfo}>
          {/* WhatsApp Contact - Menggunakan icon dari import */}
          <div 
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.border = '2px solid #25D366';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            }}
            onClick={openWhatsApp}
          >
            <div style={styles.contactIcon}>
              <img src={iconwa} alt="WhatsApp" style={styles.contactImage} />
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#7EACB5' }}>WhatsApp</div>
              <div style={styles.contactText}>+62 851-6993-4088</div>
            </div>
          </div>

          {/* Instagram Contact - Menggunakan icon dari import */}
          <div 
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.border = '2px solid #E4405F';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(228, 64, 95, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            }}
            onClick={openInstagram}
          >
            <div style={styles.contactIcon}>
              <img src={iconig} alt="Instagram" style={styles.contactImage} />
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#7EACB5' }}>Instagram</div>
              <div style={styles.contactText}>@djoglobanteran_</div>
            </div>
          </div>

          {/* TikTok Contact - Menggunakan icon dari import */}
          <div 
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.border = '2px solid #000000';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            }}
            onClick={openTikTok}
          >
            <div style={styles.contactIcon}>
              <img src={icontiktok} alt="TikTok" style={styles.contactImageTik} />
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#7EACB5' }}>TikTok</div>
              <div style={styles.contactText}>@newdjoglo_banteran</div>
            </div>
          </div>

          {/* Ponsel Contact - Jika ingin menambahkan kontak telepon */}
          <div 
            style={styles.contactItem}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(10px)';
              e.currentTarget.style.border = '2px solid #4A6D7C';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(74, 109, 124, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.border = '2px solid transparent';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
            }}
            onClick={() => window.location.href = 'tel:+6285169934088'}
          >
            <div style={styles.contactIcon}>
              <img src={iconponsel} alt="Telepon" style={styles.contactImage} />
            </div>
            <div>
              <div style={{ fontWeight: 'bold', color: '#7EACB5' }}>Telepon</div>
              <div style={styles.contactText}>0851-6993-4088</div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <h2 style={{ margin: '0 0 15px 0', fontSize: '2.5rem' }}>Djoglo Banteran</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>"Nuansa Klasik, Rasa Otentik"</p>
          
          <div style={styles.socialIcons}>
            {/* WhatsApp Icon */}
            <a 
              href={`https://wa.me/${socialData.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              <img src={iconwa} alt="WhatsApp" style={styles.socialIconImage} />
            </a>
            
            {/* Instagram Icon */}
            <a 
              href={socialData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E4405F'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              <img src={iconig} alt="Instagram" style={styles.socialIconImage} />
            </a>

            {/* TikTok Icon */}
            <a 
              href={socialData.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#000000'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'}
            >
              <img src={icontiktok} alt="TikTok" style={styles.socialIconImageTik} />
            </a>
          </div>

          <div style={{ marginTop: '30px', fontSize: '0.9rem', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '30px' }}>
            <p>© 2024 Rumah Makan Djoglo Banteran. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${socialData.whatsapp}?text=${socialData.whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.waFloat}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.4)';
        }}
      >
        <img src={iconwa} alt="WhatsApp" style={styles.waFloatImage} />
      </a>

      {/* MODAL GALLERY */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>{modalTitle} - Galeri Foto</h2>
              <button 
                style={styles.modalClose}
                onClick={closeModal}
                onMouseEnter={(e) => e.target.style.color = '#BF4646'}
                onMouseLeave={(e) => e.target.style.color = '#7EACB5'}
              >
                ×
              </button>
            </div>
            <div style={styles.modalBody}>
              <div style={styles.galleryGrid}>
                {modalImages.map((item) => (
                  <div 
                    key={item.id}
                    style={styles.galleryItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
                      e.currentTarget.style.border = '2px solid #BF4646';
                      e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                      e.currentTarget.style.border = '2px solid transparent';
                      e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                    }}
                    onClick={() => openLightbox(item)}
                  >
                    <img src={item.image} alt={item.title} style={styles.galleryItemImage} />
                    <div style={styles.galleryItemContent}>
                      <h4 style={styles.galleryItemTitle}>{item.title}</h4>
                      <p style={styles.galleryItemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div style={styles.lightboxOverlay} onClick={closeLightbox}>
          <div style={styles.lightboxContent}>
            <img src={selectedImage.image} alt={selectedImage.title} style={styles.lightboxImage} />
            <button style={styles.lightboxClose} onClick={closeLightbox}>×</button>
            <p style={styles.lightboxTitle}>{selectedImage.title} - {selectedImage.desc}</p>
          </div>
        </div>
      )}

      {/* Tambahkan keyframe animation untuk hero */}
      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
};

export default App;