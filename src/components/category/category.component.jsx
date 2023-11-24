import { useTranslation } from "react-i18next";

import './category.style.scss'





const Category = () => {
  const { t } = useTranslation()

  const categoriesItems = [
    {
      id: 1,
      img: '/images/categories/category1.png',
      title: t('category.tours.gid.title'),
      text: t('category.tours.gid.descr')
    },
    {
      id: 2,
      img: '/images/categories/category2.png',
      title: t('category.tours.transport.title'),
      text: t('category.tours.transport.descr')
    },
    {
      id: 3,
      img: '/images/categories/category3.png',
      title: t('category.tours.price.title'),
      text: t('category.tours.price.descr')
    },
    {
      id: 4,
      img: '/images/categories/category4.png',
      title: t('category.tours.medical.title'),
      text: t('category.tours.medical.descr')
    },
  ]

  return (
    <section className='category' id="category">
      <div className='category__content container'>
        <h4 className='sub--title'>{t('category.subTitle')}</h4>
        <h2 className='title'>{t('category.title')}</h2>
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
