const products = [
  {
    id: 1,
    name: 'куртка красная',
    img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
    category: 'куртки',
    oldPrice: 5880,
    price: 4790,
    brand: 'super',
    brand_id: 1,
    size: 31,
    size_id: 31,
    color_id: 2,
    color: 'красный'
  },
  {
    id: 2,
    name: 'куртка большая',
    img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
    category: 'куртки',
    oldPrice: 5900,
    price: 3790,
    brand: 'super',
    brand_id: 1,
    size: 42,
    size_id: 42,
    color_id: 3,
    color: 'зеленый'
  },
  {
    id: 3,
    name: 'куртка модная',
    img: 'https://media.istockphoto.com/photos/male-coat-isolated-on-the-white-picture-id163208487',
    category: 'куртки',
    price: 5550,
    brand: 'puper',
    brand_id: 2,
    size: 29,
    size_id: 29,
    color_id: 2,
    color: 'красный'


  },
  {
    id: 4,
    name: 'куртка выгодная',
    img: 'https://media.istockphoto.com/photos/red-womans-sports-jacket-picture-id520887025',
    category: 'куртки',
    oldPrice: 7900,
    price: 1990,
    brand: 'super',
    brand_id: 1,
    size: 29,
    size_id: 29,
    color_id: 3,
    color: 'зеленый'
  }
]

new Vue({
  el: '#app',
  data: {
    products: products,
    brands: [
      { id: 1, brand: 'super' },
      { id: 2, brand: 'puper' },
      { id: 3, brand: 'cool' },
      { id: 4, brand: 'like' },
    ],
    sizes: [
      { id: 29, size: 29 },
      { id: 31, size: 31 },
      { id: 35, size: 35 },
      { id: 37, size: 37 },
      { id: 42, size: 42 }
    ],
    colors: [
      { id: 1, color: 'синий' },
      { id: 2, color: 'красный' },
      { id: 3, color: 'зеленый' },
      { id: 4, color: 'белый' },
      { id: 5, color: 'серый' },
    ],
    selectBrand: 0,
    selectSize: 0,
    selectColor: 0,
    fontSize: 16,
    height: '',
    width: '',
    selectedCard: null,
    isFilteredProductsVisible: true,
    isSelectedCardVisible: false
  },
  computed: {
    filteredProducts: function () {
      return this.products
        // Фильтруем по бренду
        .filter(product => {
          return this.selectBrand == 0 || product.brand_id == this.selectBrand;
        })

        // Фильтруем по размеру
        .filter(product => {
          return this.selectSize == 0 || product.size_id == this.selectSize;
        })

        // Фильтруем по цвету
        .filter(product => {
          return this.selectColor == 0 || product.color_id == this.selectColor;
        })
    },

  },

  methods: {
    selectProduct: function (filteredProducts, index) {
      alert("Куплен товар" + " " + '"' + filteredProducts[index].name + '"')
    },

    zoom(filteredProducts, index) {
      this.selectedCard = filteredProducts[index]
    }
  },
})



