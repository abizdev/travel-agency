import { useTranslation } from 'react-i18next'
// import './footer.styles.scss'
import './style.css'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="ftco-section" id='footer'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters">
                <div
                  className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch"
                >
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">
                      {t('footer.formTitle')}
                    </h3>

                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      novalidate="novalidate"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="name">{t('footer.form.name.label')}</label>
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder={t('footer.form.name.placeholder')}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" for="email">{t('footer.form.email.label')}</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder={t('footer.form.email.placeholder')}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="subject">{t('footer.form.subject.label')}</label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder={t('footer.form.subject.placeholder')}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" for="#">{t('footer.form.message.label')}</label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder={t('footer.form.message.placeholder')}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value={t('footer.sendBtn')}
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                    <h3>{t('footer.contactsTitle')}</h3>
                    <p className="mb-4">{t('footer.contactsText')}</p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div
                        className="icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-map-marker"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>{t('footer.footerAddress.text')}:</span> {t('footer.footerAddress.address')}
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div
                        className="icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>{t('footer.phone')}:<br /></span>
                          <a href="tel:+998998224780"> +998 99 822 47 80</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div
                        className="icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:<br /></span>
                          <a href="mailto:info@vipcarry.uz">
                            info@vipcarry.uz</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div
                        className="icon d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Telegram:<br /></span>
                          <a href="https://t.me/vipcarry_uz">vipcarry_uz</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer