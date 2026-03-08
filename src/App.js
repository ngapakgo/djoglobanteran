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
import heroImage from './assets/heroimage/Depan_2.jpg';
import ayamBakar from './assets/ayam_bakar.jpg';
import menuGurame from './assets/gurameh_bakar.jpg';
import menuAyamGeprek from './assets/ayam_geprek.jpg';
import esTeh from './assets/es_teh.jpg';
import esJeruk from './assets/es_jeruk.jpg';
import ingkungAyam from './assets/ingkung_ayam.jpg';
import nuansaImage from './assets/cardnuansa/Card_1.jpg';
import kolamImage from './assets/cardnuansa/Card_2.jpg';
import galeriImage from './assets/cardnuansa/Card_3.jpg';
import iconig from './assets/icon/instagram.png';
import iconponsel from './assets/icon/ponsel.png';
import icontiktok from './assets/icon/tiktok.png';
import iconwa from './assets/icon/whatsapp.png';
import keluarga1 from './assets/keluarga/kl1.jpg'
import keluarga2 from './assets/keluarga/kl2.jpg'
import keluarga3 from './assets/keluarga/kl3.jpg'
import keluarga4 from './assets/keluarga/kl4.jpg'
import keluarga5 from './assets/keluarga/kl5.jpg'
import yr2 from './assets/yearbook/yearbook2.jpg'
import yr3 from './assets/yearbook/yearbook3.jpg'
import yr4 from './assets/yearbook/yearbook4.jpg'
import yr7 from './assets/yearbook/yearbook7.jpg'
import yr8 from './assets/yearbook/yearbook8.jpg'
import wd1 from './assets/wedding/Wedding_1.jpg'
import wd2 from './assets/wedding/Wedding_2.jpg'
import wd3 from './assets/wedding/Wedding_3.jpg'
import wd5 from './assets/wedding/Wedding_5.jpg'


// Import untuk section acara (sementara pakai logo dulu)
import acaraKeluarga from './assets/cardacara/carkel.jpg';
import acaraYearBook from './assets/cardacara/cardyear.jpg';
import acaraWedding from './assets/cardacara/cardwed.jpg';

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
    { id: 3, image: menu4, title: "Paket Wedding", desc: "Pilihan Paket Wedding" },
    { id: 4, image: menu1, title: "Menu EsKrim", desc: "Aneka Rasa Eskrim" },
  ],
  // Data untuk galeri acara (sementara pakai logo)
  acara: [
    {
      id: 1,
      title: "Arisan Keluarga",
      images: [
        { id: 101, image: keluarga1, title: "Arisan Keluarga 1", desc: "Suasana arisan keluarga di Djoglo" },
        { id: 102, image: keluarga2, title: "Arisan Keluarga 2", desc: "Momen kebersamaan keluarga" },
        { id: 103, image: keluarga3, title: "Arisan Keluarga 3", desc: "Hidangan spesial untuk arisan" },
        { id: 104, image: keluarga4, title: "Arisan Keluarga 4", desc: "Dekorasi ruang arisan" },
        { id: 105, image: keluarga5, title: "Arisan Keluarga 5", desc: "Suasana hangat bersama keluarga" },
      ]
    },
    // {
    //   id: 2,
    //   title: "Dawis",
    //   images: [
    //     { id: 201, image: logo, title: "Dawis 1", desc: "Pertemuan Dasawisma" },
    //     { id: 202, image: logo, title: "Dawis 2", desc: "Suasana diskusi kelompok" },
    //     { id: 203, image: logo, title: "Dawis 3", desc: "Kegiatan Dawis di Djoglo" },
    //     { id: 204, image: logo, title: "Dawis 4", desc: "Fasilitas ruang pertemuan" },
    //     { id: 205, image: logo, title: "Dawis 5", desc: "Momen kebersamaan Dawis" },
    //   ]
    // },
    {
      id: 2,
      title: "Year Book",
      images: [
        { id: 301, image: yr7, title: "Year Book 1", desc: "Sesi foto year book" },
        { id: 302, image: yr2, title: "Year Book 2", desc: "Spot foto klasik" },
        { id: 303, image: yr3, title: "Year Book 3", desc: "Pose bersama di Djoglo" },
        { id: 304, image: yr4, title: "Year Book 4", desc: "Background arsitektur Jawa" },
        { id: 305, image: yr8, title: "Year Book 5", desc: "Momen abadi year book" },
      ]
    },
    {
      id: 3,
      title: "Wedding",
      images: [
        { id: 401, image: wd1, title: "Wedding 1", desc: "Dekorasi pernikahan" },
        { id: 402, image: wd2, title: "Wedding 2", desc: "Suasana resepsi" },
        { id: 403, image: wd3, title: "Wedding 3", desc: "Pelaminan tradisional" },
        { id: 405, image: wd5, title: "Wedding 5", desc: "Foto prewedding di Djoglo" },
      ]
    }
  ]
};

// Data untuk section acara
const acaraData = [
  {
    id: 1,
    title: "Arisan Keluarga",
    desc: "Momen berkumpul keluarga semakin hangat dengan suasana djoglo yang nyaman dan menu spesial kami",
    icon: "👨‍👩‍👧‍👦",
    image: acaraKeluarga,
    color: "#7EACB5"
  },
  // {
  //   id: 2,
  //   title: "Dawis",
  //   desc: "Tempat ideal untuk pertemuan Dasawisma dengan suasana asri dan fasilitas lengkap",
  //   icon: "🏘️",
  //   image: acaraDawis,
  //   color: "#BF4646"
  // },
  {
    id: 2,
    title: "Year Book",
    desc: "Abadikan momen spesial tahunan Anda dengan latar arsitektur klasik yang instagramable",
    icon: "📸",
    image: acaraYearBook,
    color: "#EDDCC6"
  },
  {
    id: 3,
    title: "Wedding",
    desc: "Raih kesan istimewa di hari bahagia dengan konsep pernikahan tradisional yang elegan",
    icon: "💒",
    image: acaraWedding,
    color: "#7EACB5"
  }
];

const App = () => {
  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalImages, setModalImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Data sosial media dan kontak
  const socialData = {
    instagram: "https://www.instagram.com/djoglobanteran_?igsh=NGtpZmlrYzZjaWNo",
    tiktok: "https://www.tiktok.com/@newdjoglo_banteran?_r=1&_t=ZS-9455kfjxwQ6",
    whatsapp: "6285169934088",
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
    mobileMenuButton: {
      display: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: '#BF4646'
    },
    mobileMenu: {
      display: 'none',
      position: 'absolute',
      top: '90px',
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 244, 234, 0.98)',
      backdropFilter: 'blur(10px)',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 0',
      gap: '25px',
      borderBottom: '2px solid #EDDCC6',
      zIndex: 999,
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
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
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '-50px',
      position: 'relative',
      zIndex: 10,
      borderRadius: '50px 50px 0 0'
    },

    highlightCard: { 
      backgroundColor: 'white', 
      padding: '0 0 35px 0', 
      borderRadius: '20px', 
      width: 'calc(25% - 23px)',
      minWidth: '280px',
      flex: '1 1 auto',
      textAlign: 'center', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },

    highlightImage: {
      width: '100%',
      height: '200px',
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
      fontSize: '0.9rem',
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
    // Acara Section Styles
    acaraSection: {
      padding: '40px 8% 80px 8%',
      backgroundColor: '#FFF4EA',
      position: 'relative'
    },
    acaraSubtitle: {
      textAlign: 'center',
      color: '#7EACB5',
      fontSize: '1.2rem',
      marginBottom: '40px',
      fontStyle: 'italic'
    },
    acaraGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    acaraCard: {
      backgroundColor: 'white',
      borderRadius: '30px',
      overflow: 'hidden',
      boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease',
      position: 'relative',
      cursor: 'pointer'
    },
    acaraImageContainer: {
      position: 'relative',
      height: '250px',
      overflow: 'hidden'
    },
    acaraImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease'
    },
    acaraOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '25px',
      color: 'white'
    },
    acaraIcon: {
      fontSize: '2.5rem',
      marginRight: '15px',
      backgroundColor: 'rgba(255,255,255,0.2)',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(5px)'
    },
    acaraTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: 0,
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    acaraContent: {
      padding: '25px',
      background: 'white'
    },
    acaraDescription: {
      color: '#666',
      fontSize: '0.95rem',
      lineHeight: '1.6',
      margin: '0 0 20px 0'
    },
    acaraButton: {
      backgroundColor: '#7EACB5',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      fontWeight: '600',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      width: '100%',
      justifyContent: 'center'
    },
    acaraViewGalleryBtn: {
      backgroundColor: '#BF4646',
      color: 'white',
      border: 'none',
      padding: '12px 25px',
      borderRadius: '25px',
      fontWeight: '600',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      width: '100%',
      justifyContent: 'center',
      marginTop: '10px'
    },
    acaraStats: {
      display: 'flex',
      gap: '20px',
      marginTop: '15px',
      paddingTop: '15px',
      borderTop: '1px solid #EDDCC6'
    },
    acaraStat: {
      flex: 1,
      textAlign: 'center'
    },
    acaraStatValue: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#BF4646'
    },
    acaraStatLabel: {
      fontSize: '0.8rem',
      color: '#7EACB5',
      marginTop: '5px'
    },
    acaraBanner: {
      background: 'linear-gradient(135deg, #7EACB5 0%, #BF4646 100%)',
      padding: '40px',
      borderRadius: '20px',
      marginTop: '50px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '30px'
    },
    acaraBannerText: {
      color: 'white',
      flex: 1,
      minWidth: '250px'
    },
    acaraBannerTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      margin: '0 0 10px 0'
    },
    acaraBannerDesc: {
      fontSize: '1rem',
      opacity: 0.9,
      margin: 0
    },
    acaraBannerButton: {
      backgroundColor: 'white',
      color: '#BF4646',
      padding: '15px 35px',
      borderRadius: '50px',
      border: 'none',
      fontWeight: '700',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap'
    },
    // Map Styles
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
      case 'acara':
        images = galleryData.acara.find(a => a.title === title)?.images || [];
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
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
        <div style={styles.navMenu} className="desktop-menu">
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
            onClick={() => scrollToSection('acara')}
          >
            ACARA
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
        <div style={styles.mobileMenuButton} className="mobile-menu-button" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{...styles.mobileMenu, display: isMenuOpen ? 'flex' : 'none'}} className="mobile-menu">
        <span 
          style={styles.navItem}
          onClick={() => scrollToSection('home')}
        >
          HOME
        </span>
        <span 
          style={styles.navItem}
          onClick={() => scrollToSection('menu')}
        >
          MENU
        </span>
        <span 
          style={styles.navItem}
          onClick={() => scrollToSection('acara')}
        >
          ACARA
        </span>
        <span 
          style={styles.navItem}
          onClick={() => scrollToSection('lokasi')}
        >
          LOKASI
        </span>
        <span 
          style={styles.navItem}
          onClick={() => scrollToSection('kontak')}
        >
          KONTAK
        </span>
      </div>

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
            <h4 style={{ color: '#7EACB5', fontSize: '1.2rem', margin: '10px 0' }}>Nuansa Djoglo</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
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
            <h4 style={{ color: '#7EACB5', fontSize: '1.2rem', margin: '10px 0' }}>Aviary Mini</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
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
            <h4 style={{ color: '#7EACB5', fontSize: '1.2rem', margin: '10px 0' }}>Galeri Antik</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
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
            <h4 style={{ color: '#7EACB5', fontSize: '1.2rem', margin: '10px 0' }}>Daftar Menu</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
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

      {/* ACARA SECTION - NEW */}
      <section id="acara" style={styles.acaraSection}>
        <h2 style={styles.sectionTitle}>Acara</h2>
        <div style={styles.underline}></div>
        <p style={styles.acaraSubtitle}>Wujudkan momen spesial Anda bersama kami ✨</p>
        
        <div style={styles.acaraGrid}>
          {acaraData.map((acara) => (
            <div 
              key={acara.id}
              style={styles.acaraCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px)';
                e.currentTarget.style.boxShadow = '0 30px 50px rgba(0,0,0,0.2)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                e.currentTarget.querySelector('img').style.transform = 'scale(1)';
              }}
            >
              <div style={styles.acaraImageContainer}>
                <img src={acara.image} alt={acara.title} style={styles.acaraImage} />
                <div style={styles.acaraOverlay}>
                  <div style={styles.acaraIcon}>{acara.icon}</div>
                  <h3 style={styles.acaraTitle}>{acara.title}</h3>
                </div>
              </div>
              <div style={styles.acaraContent}>
                <p style={styles.acaraDescription}>{acara.desc}</p>
                <button 
                  style={styles.acaraButton}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#BF4646';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#7EACB5';
                    e.target.style.transform = 'scale(1)';
                  }}
                  onClick={() => openWhatsApp(`Halo%20Djoglo%20Banteran%2C%20saya%20tertarik%20dengan%20paket%20${acara.title}`)}
                >
                  <span>📞</span> Info Lebih Lanjut
                </button>
                <button 
                  style={styles.acaraViewGalleryBtn}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#9f3a3a';
                    e.target.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#BF4646';
                    e.target.style.transform = 'scale(1)';
                  }}
                  onClick={() => openGallery('acara', acara.title)}
                >
                  <span>📸</span> Lihat Galeri Foto
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Promo Acara */}
        <div style={styles.acaraBanner}>
          <div style={styles.acaraBannerText}>
            <h3 style={styles.acaraBannerTitle}>Rencanakan Acara Anda</h3>
            <p style={styles.acaraBannerDesc}>
              Dapatkan penawaran spesial untuk paket acara keluarga, arisan, dan wedding. 
              Konsultasikan kebutuhan acara Anda dengan tim kami!
            </p>
          </div>
          <button 
            style={styles.acaraBannerButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#BF4646';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#BF4646';
              e.target.style.transform = 'scale(1)';
            }}
            onClick={() => openWhatsApp('Halo%20Djoglo%20Banteran%2C%20saya%20ingin%20konsultasi%20untuk%20acara')}
          >
            Konsultasi Sekarang →
          </button>
        </div>
      </section>

      {/* LOCATION SECTION */}
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
            {/* WhatsApp Contact */}
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

            {/* Instagram Contact */}
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

            {/* TikTok Contact */}
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

            {/* Ponsel Contact */}
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

      {/* Tambahkan keyframe animation untuk hero dan media queries */}
      <style>
        {`
          @keyframes zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
          }
          
          html {
            scroll-behavior: smooth;
          }

          /* Media Queries untuk Responsive */
          @media screen and (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            
            .mobile-menu-button {
              display: block !important;
            }

            [style*="navTitle"] {
              font-size: 1.1rem !important;
            }

            [style*="heroH1"] {
              font-size: 2.5rem !important;
            }

            [style*="heroPreTitle"] {
              font-size: 0.9rem !important;
              letter-spacing: 2px !important;
            }

            [style*="heroP"] {
              font-size: 1rem !important;
            }

            [style*="heroButton"] {
              padding: 15px 30px !important;
              font-size: 1rem !important;
            }

            [style*="highlightSection"] {
              padding: 40px 4% !important;
              gap: 20px !important;
              margin-top: -30px !important;
              flex-wrap: wrap !important;
              justify-content: center !important;
            }

            [style*="highlightCard"] {
              width: calc(50% - 20px) !important;
              min-width: 250px !important;
              margin: 0 !important;
            }

            [style*="acaraGrid"] {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
              gap: 20px !important;
            }

            [style*="acaraBanner"] {
              padding: 30px !important;
              flex-direction: column !important;
              text-align: center !important;
            }

            [style*="acaraBannerButton"] {
              width: 100% !important;
            }

            [style*="sectionTitle"] {
              font-size: 2rem !important;
              margin-top: 50px !important;
            }

            [style*="mapText"] h2 {
              font-size: 2rem !important;
            }

            [style*="contactItem"] {
              padding: 15px 20px !important;
            }

            [style*="contactText"] {
              font-size: 0.9rem !important;
            }

            [style*="modalTitle"] {
              font-size: 1.5rem !important;
            }

            [style*="modalHeader"] {
              padding: 15px 20px !important;
            }

            [style*="modalBody"] {
              padding: 20px !important;
            }

            [style*="galleryGrid"] {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
              gap: 15px !important;
            }
          }

          @media screen and (max-width: 480px) {
            [style*="navbar"] {
              padding: 15px 4% !important;
            }

            [style*="logo"] {
              height: 40px !important;
              width: 40px !important;
            }

            [style*="navTitle"] {
              font-size: 0.9rem !important;
            }

            [style*="heroH1"] {
              font-size: 2rem !important;
            }

            [style*="highlightSection"] {
              padding: 30px 4% !important;
              gap: 15px !important;
            }

            [style*="highlightCard"] {
              width: 100% !important;
              max-width: 350px !important;
              margin: 0 auto !important;
            }

            [style*="acaraGrid"] {
              grid-template-columns: 1fr !important;
            }

            [style*="acaraImageContainer"] {
              height: 200px !important;
            }

            [style*="acaraIcon"] {
              width: 45px !important;
              height: 45px !important;
              font-size: 2rem !important;
            }

            [style*="acaraTitle"] {
              font-size: 1.2rem !important;
            }

            [style*="acaraBannerTitle"] {
              font-size: 1.5rem !important;
            }

            [style*="menuGrid"] {
              padding: 0 4% 50px 4% !important;
              gap: 25px !important;
            }

            [style*="cardContent"] {
              padding: 20px !important;
            }

            [style*="menuName"] {
              font-size: 1.1rem !important;
            }

            [style*="menuPrice"] {
              font-size: 1.1rem !important;
            }

            [style*="mapContainer"] {
              padding: 50px 4% !important;
            }

            [style*="mapText"] h2 {
              font-size: 1.8rem !important;
            }

            [style*="mapText"] p {
              font-size: 0.95rem !important;
            }

            [style*="mapFrame"] {
              height: 300px !important;
            }

            [style*="contactIcon"] {
              width: 40px !important;
              height: 40px !important;
            }

            [style*="contactImage"] {
              width: 25px !important;
              height: 25px !important;
            }

            [style*="contactImageTik"] {
              width: 50px !important;
              height: 50px !important;
            }

            [style*="footer"] h2 {
              font-size: 2rem !important;
            }

            [style*="footer"] p {
              font-size: 1rem !important;
            }

            [style*="socialIcon"] {
              width: 45px !important;
              height: 45px !important;
            }

            [style*="socialIconImage"] {
              width: 25px !important;
              height: 25px !important;
            }

            [style*="socialIconImageTik"] {
              width: 50px !important;
              height: 50px !important;
            }

            [style*="waFloat"] {
              width: 50px !important;
              height: 50px !important;
              bottom: 20px !important;
              right: 20px !important;
            }

            [style*="waFloatImage"] {
              width: 28px !important;
              height: 28px !important;
            }

            [style*="modalContent"] {
              width: 98% !important;
            }

            [style*="galleryGrid"] {
              grid-template-columns: 1fr !important;
            }

            [style*="lightboxTitle"] {
              font-size: 0.9rem !important;
              bottom: -30px !important;
            }

            [style*="lightboxClose"] {
              top: -30px !important;
              font-size: 1.8rem !important;
            }
          }

          /* Landscape mode untuk handphone */
          @media screen and (max-width: 768px) and (orientation: landscape) {
            [style*="hero"] {
              height: 120vh !important;
            }

            [style*="heroH1"] {
              font-size: 2.2rem !important;
            }

            [style*="highlightSection"] {
              margin-top: -20px !important;
            }

            [style*="modalBody"] {
              max-height: calc(90vh - 100px) !important;
            }

            [style*="galleryGrid"] {
              grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
            }

            [style*="acaraGrid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          /* Tablet */
          @media screen and (min-width: 769px) and (max-width: 1024px) {
            [style*="navbar"] {
              padding: 20px 5% !important;
            }

            [style*="heroH1"] {
              font-size: 4rem !important;
            }

            [style*="highlightCard"] {
              width: calc(50% - 15px) !important;
            }

            [style*="menuGrid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            [style*="acaraGrid"] {
              grid-template-columns: repeat(2, 1fr) !important;
            }

            [style*="mapFlex"] {
              gap: 30px !important;
            }
          }

          /* Animasi untuk mobile menu */
          .mobile-menu {
            animation: slideDown 0.3s ease;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Touch-friendly improvements untuk mobile */
          @media (hover: none) and (pointer: coarse) {
            button, 
            [style*="cursor: pointer"] {
              min-height: 44px !important;
              min-width: 44px !important;
            }

            [style*="contactItem"] {
              padding: 15px 20px !important;
            }
          }

          /* Mencegah overflow pada container */
          * {
            max-width: 100vw;
            box-sizing: border-box;
          }

          body {
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </div>
  );
};

export default App;