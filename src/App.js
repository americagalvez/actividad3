import React, { useState } from 'react';
import './App.css';

function App() {
  const [productos] = useState([
    // Maquillaje
    { id: 1, nombre: "Labial Matte Premium", precio: 250, imagen: "https://i.ebayimg.com/images/g/RMEAAOSwBaFlX5cM/s-l300.webp", categoria: "Maquillaje" },
    { id: 2, nombre: "Base de Maquillaje Full Cover", precio: 550, imagen: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00360052315520L.jpg?odnHeight=300&odnWidth=300&odnBg=FFFFFF", categoria: "Maquillaje" },
    { id: 3, nombre: "Paleta de Sombras Profesional", precio: 450, imagen: "https://pimg.eur.marykaycdn.com/HeroZoom/10003/J2003179-UNL-GB-1199-QSM-07-22-LE-WARM-HUES-EYE-SHADOW-MACRO-WT.jpg", categoria: "Maquillaje" },
    { id: 4, nombre: "Rímel Voluminizador X10", precio: 180, imagen: "https://www.baratazo.com/baratazo/wp-content/uploads/2022/06/rimel1.jpg", categoria: "Maquillaje" },
    { id: 5, nombre: "Delineador Líquido Precise", precio: 220, imagen: "https://centralmakeup.mx/wp-content/uploads/2023/05/LIQUID-EYE-LINER-HIGH-PRECISION-01.png", categoria: "Maquillaje" },
    { id: 6, nombre: "Polvo Compacto HD", precio: 320, imagen: "https://www.chanel.com/images/t_one/w_0.43,h_0.43,c_crop/q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_300/sublimage-l-essence-de-teint-ultimate-radiance-generating-serum-foundation-bd21-1-35fl-oz--packshot-default-147120-8835361898526.jpg", categoria: "Maquillaje" },
    
    // Cuidado Facial
    { id: 7, nombre: "Crema Hidratante Intensa", precio: 350, imagen: "https://www.farmacialeloir.com.ar/img/articulos/2021/10/nivea_rose_care_crema_hidratante_en_gel_imagen1.jpg", categoria: "Cuidado Facial" },
    { id: 8, nombre: "Serum Antiarrugas Premium", precio: 520, imagen: "https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00750955290513L.jpg", categoria: "Cuidado Facial" },

    { id: 10, nombre: "Exfoliante Facial Suave", precio: 190, imagen: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_300,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00007050105360L.jpg", categoria: "Cuidado Facial" },
    { id: 11, nombre: "Mascarilla Facial de Oro", precio: 420, imagen: "https://www.savealoonie.com/wp-content/uploads/2021/03/garnier-peel-off-beauty-face-mask-skin-care-bundle-intense-hydration-300x300.jpg", categoria: "Cuidado Facial" },
    { id: 12, nombre: "Agua Micelar 3 en 1", precio: 230, imagen: "https://revistacanarii.com/wp-content/uploads/2022/11/garnier_article_micellarwater_bigimage_1780x992_1.jpg", categoria: "Cuidado Facial" },
    
    // Fragancias
    { id: 13, nombre: "Perfume Floral Elegance", precio: 550, imagen: "https://i.pinimg.com/originals/54/63/81/5463811ae23ecf5beb5d34de88ffb0b4.png", categoria: "Fragancias" },
    { id: 14, nombre: "Eau de Toilette Fresh", precio: 450, imagen: "https://th.bing.com/th/id/OIP.QU6jq3t2wcFD8JQKKStB3gHaHa?rs=1&pid=ImgDetMain" , categoria: "Fragancias" },
    { id: 15, nombre: "Perfume Oriental Mystic", precio: 580, imagen: "https://i5.walmartimages.com.mx/samsmx/images/product-images/img_large/981026675l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", categoria: "Fragancias" },
    
    // Cuidado Corporal
    { id: 16, nombre: "Loción Corporal Hidratante", precio: 220, imagen: "https://pimg.amr.marykaycdn.com/HeroZoom/10003/J2000386-UNL-GB-169-ABC-03-21-BODY-LOTIONS-HiRes.jpg", categoria: "Cuidado Corporal" },
    { id: 17, nombre: "Aceite Corporal Relajante", precio: 290, imagen: "https://i.ebayimg.com/images/g/Y3IAAOSw7c5nEHc4/s-l960.webp" , categoria: "Cuidado Personal"},
    { id: 18, nombre: "Exfoliante Corporal Energizante", precio: 180, imagen: "https://i.ebayimg.com/images/g/WzEAAOSw9XNnaZ5N/s-l1600.webp", categoria: "Cuidado Corporal" },
    
  
    
   
    
    // Accesorios
    { id: 26, nombre: "Set de Brochas Profesional", precio: 490, imagen: "https://th.bing.com/th/id/OIP.-GGQRZGYwcOe1diF9qWQygHaHa?rs=1&pid=ImgDetMain", categoria: "Accesorios" },
    { id: 27, nombre: "Espejo de Maquillaje LED", precio: 550, imagen: "https://th.bing.com/th/id/R.38648c875990b2ed4eba9e3f9792c745?rik=%2bIlPcY5Igl7TrQ&pid=ImgRaw&r=0", categoria: "Accesorios" },
    { id: 28, nombre: "Organizador de Cosméticos", precio: 320, imagen: "https://th.bing.com/th/id/R.453b1ff37b3315555c7d785a105bbf44?rik=Xoh7%2f3qwfaMqAA&pid=ImgRaw&r=0", categoria: "Accesorios" },
    { id: 29, nombre: "Aretes", precio: 180, imagen: "https://down-mx.img.susercontent.com/file/br-11134201-23030-iapvr59hsoov9d", categoria: "Accesorios" }
  ]);

  const [carrito, setCarrito] = useState([]);
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [metodoPago, setMetodoPago] = useState('');
  const [formularioPago, setFormularioPago] = useState({ 
    nombre: '', 
    tarjeta: '', 
    fecha: '', 
    cvv: '' 
  });
  const [showBanner, setShowBanner] = useState(true);
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const categorias = ['Todos', ...new Set(productos.map(producto => producto.categoria))];

  const agregarAlCarrito = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);
    if (productoExistente) {
      const nuevosProductos = carrito.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevosProductos);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    const nuevosProductos = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevosProductos);
  };

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;
    const nuevosProductos = carrito.map((producto) =>
      producto.id === id ? { ...producto, cantidad } : producto
    );
    setCarrito(nuevosProductos);
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  };

  const handleFormularioChange = (e) => {
    const { name, value } = e.target;
    setFormularioPago({
      ...formularioPago,
      [name]: value,
    });
  };

  const realizarCompra = () => {
    if (!metodoPago) {
      alert("Por favor, seleccione un método de pago.");
      return;
    }
    if (metodoPago === 'Tarjeta de Crédito') {
      if (!formularioPago.nombre || !formularioPago.tarjeta || !formularioPago.fecha || !formularioPago.cvv) {
        alert("Por favor, complete todos los campos del formulario de pago.");
        return;
      }
    }
    setCompraRealizada(true);
    setCarrito([]);
    setMetodoPago('');
    setFormularioPago({ nombre: '', tarjeta: '', fecha: '', cvv: '' });
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  const productosFiltrados = categoriaActiva === 'Todos' 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaActiva);

  return (
    <div className="App">
      {showBanner && (
        <div className="welcome-banner">
          <div className="banner-content">
            <h1>Bienvenida a Glamour Lab </h1>
            <p>Productos premium de belleza para realzar tu naturalidad</p>
            <button onClick={closeBanner}>Comenzar a comprar</button>
          </div>
        </div>
      )}

      <header className="header">
        <div className="header-content">
          <h1>Glamour Lab</h1>
          <p>Belleza que ilumina</p>
        </div>
      </header>

      <main className="main-content">
        <div className="productos-container">
          <div className="productos">
            <div className="filtros-categorias">
              {categorias.map(categoria => (
                <button
                  key={categoria}
                  className={`categoria-btn ${categoriaActiva === categoria ? 'active' : ''}`}
                  onClick={() => setCategoriaActiva(categoria)}
                >
                  {categoria}
                </button>
              ))}
            </div>
            
            <h2>{categoriaActiva === 'Todos' ? 'Nuestros Productos' : categoriaActiva}</h2>
            <div className="productos-lista">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="producto-card">
                  <div className="producto-imagen">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <span className="producto-categoria">{producto.categoria}</span>
                  </div>
                  <div className="producto-info">
                    <h3>{producto.nombre}</h3>
                    <p className="precio">${producto.precio.toLocaleString()}</p>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => agregarAlCarrito(producto)}
                    >
                      <span>+</span> Añadir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carrito-container">
            <div className="carrito">
              <h2>Tu Carrito</h2>
              {carrito.length === 0 ? (
                <div className="empty-cart">
                  <p>Tu carrito está vacío</p>
                  <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Carrito vacío" />
                </div>
              ) : (
                <ul className="cart-items">
                  {carrito.map((producto) => (
                    <li key={producto.id} className="cart-item">
                      <div className="item-image">
                        <img src={producto.imagen} alt={producto.nombre} />
                      </div>
                      <div className="item-details">
                        <h4>{producto.nombre}</h4>
                        <p>${producto.precio.toLocaleString()} c/u</p>
                        <div className="quantity-controls">
                          <button 
                            className="quantity-btn"
                            onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                          >
                            -
                          </button>
                          <span>{producto.cantidad}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="item-actions">
                        <p>${(producto.precio * producto.cantidad).toLocaleString()}</p>
                        <button 
                          className="remove-btn"
                          onClick={() => eliminarDelCarrito(producto.id)}
                        >
                          ×
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {carrito.length > 0 && (
                <div className="checkout-section">
                  <div className="total">
                    <span>Total:</span>
                    <span>${calcularTotal().toLocaleString()}</span>
                  </div>
                  
                  <div className="payment-methods">
                    <h3>Método de Pago</h3>
                    <div className="method-options">
                      <label className={`method-option ${metodoPago === 'Tarjeta de Crédito' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="metodoPago"
                          value="Tarjeta de Crédito"
                          checked={metodoPago === 'Tarjeta de Crédito'}
                          onChange={(e) => setMetodoPago(e.target.value)}
                        />
                        <span>Tarjeta de Crédito</span>
                      </label>
                      <label className={`method-option ${metodoPago === 'PayPal' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="metodoPago"
                          value="PayPal"
                          checked={metodoPago === 'PayPal'}
                          onChange={(e) => setMetodoPago(e.target.value)}
                        />
                        <span>PayPal</span>
                      </label>
                      <label className={`method-option ${metodoPago === 'Efectivo' ? 'selected' : ''}`}>
                        <input
                          type="radio"
                          name="metodoPago"
                          value="Efectivo"
                          checked={metodoPago === 'Efectivo'}
                          onChange={(e) => setMetodoPago(e.target.value)}
                        />
                        <span>Efectivo al recibir</span>
                      </label>
                    </div>
                  </div>

                  {metodoPago === 'Tarjeta de Crédito' && (
                    <div className="credit-card-form">
                      <h3>Información de Pago</h3>
                      <div className="form-group">
                        <label>Nombre en la tarjeta</label>
                        <input
                          type="text"
                          name="nombre"
                          placeholder="Ej. María González"
                          value={formularioPago.nombre}
                          onChange={handleFormularioChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Número de tarjeta</label>
                        <input
                          type="text"
                          name="tarjeta"
                          placeholder="1234 5678 9012 3456"
                          value={formularioPago.tarjeta}
                          onChange={handleFormularioChange}
                        />
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label>Fecha de expiración</label>
                          <input
                            type="text"
                            name="fecha"
                            placeholder="MM/AA"
                            value={formularioPago.fecha}
                            onChange={handleFormularioChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>CVV</label>
                          <input
                            type="text"
                            name="cvv"
                            placeholder="123"
                            value={formularioPago.cvv}
                            onChange={handleFormularioChange}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <button 
                    className="checkout-btn"
                    onClick={realizarCompra}
                  >
                    Finalizar Compra
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {compraRealizada && (
        <div className="purchase-modal">
          <div className="modal-content">
            <div className="success-icon">✓</div>
            <h2>¡Compra Exitosa!</h2>
            <p>Gracias por tu compra. Tu pedido está siendo procesado.</p>
            <p>Recibirás un correo con los detalles de tu compra.</p>
            <button 
              className="close-modal-btn"
              onClick={() => setCompraRealizada(false)}
            >
              Continuar comprando
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Glamour Lab</h3>
            <p>Belleza que ilumina</p>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>info@cosmeticoseg.com</p>
            <p>Tel: 55 1234 5678</p>
          </div>
          <div className="footer-section">
            <h3>Horario</h3>
            <p>Lunes a Viernes: 9am - 7pm</p>
            <p>Sábados: 10am - 4pm</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Cosméticos EG. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;