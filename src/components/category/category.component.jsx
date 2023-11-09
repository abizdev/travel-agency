import './category.style.scss'

const categoriesItems = [
  {
    id: 1,
    img: '/images/categories/category1.png',
    title: 'Guided Tours',
    text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
  },
  {
    id: 2,
    img: '/images/categories/category2.png',
    title: 'Best Flights Options',
    text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
  },
  {
    id: 3,
    img: '/images/categories/category3.png',
    title: 'Religious Tours',
    text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
  },
  {
    id: 4,
    img: '/images/categories/category4.png',
    title: 'Medical insurance',
    text: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
  },
]

const Category = () => {
  return (
    <section className='category'>
      <div className='category__content container'>
        <h4 className='sub--title'>CATEGORY</h4>
        <h2 className='title'>We Offer Best Services</h2>
        <div className="category__items">
          {
            categoriesItems.map((category) => (
              <div className="category-item" key={category.id}>
                <div className="category-item__info">
                  <img src={category.img} alt="category-card"/>
                  <h3>{category.title}</h3>
                  <p>{category.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Category
