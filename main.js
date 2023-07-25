class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      console.log(this.products);
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (this.products.some((product) => product.code === code)) {
        console.error("Código de producto ya cargado");
      } else {
        this.products.push({
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
          id: this.products.length,
        });
      }
    }
  
    getProductById(id) {
      const product = this.products.find((product) => product.id === id);
      if (product) {
        console.log(product);
      } else {
        console.error("Not found");
      }
    }
  }
  
  const productManager = new ProductManager()
  
  productManager.getProducts()
  productManager.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
  productManager.getProducts()
  productManager.addProduct("producto prueba", "Este es un producto prueba", "200", "Sin imagen", "abc123", 25)
  productManager.getProductById(23)
  productManager.getProductById(0)