import { forwardRef } from 'react'

const IDCard = forwardRef(({ data, photoPreview, onPhotoClick }, ref) => {
  const {
    cardNo, name, designation, area, address, mobile,
    validFromFormatted, validToFormatted, regDate
  } = data

  return (
    <div className="id-card-wrapper" ref={ref}>
      <div className="id-card">
        {/* ====== TOP RED CURVE ====== */}
        <div className="top-curve">
          <span>PRESS</span>
        </div>

        {/* ====== HEADER SECTION ====== */}
        <div className="header">
          <div className="reg-no">R.No.: 547/06T</div>

          {/* LOGO: BELOW REGISTRATION NUMBER (only one logo in header) */}
          <div className="logo-below-reg">
            <img
              src="/logo.png"
              alt="Org Logo"
              className="logo-below-reg-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="logo-below-reg-fallback" style={{ display: 'none' }}>
              <svg viewBox="0 0 100 100" width="45" height="45">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#c62828" strokeWidth="2" />
                <circle cx="50" cy="50" r="38" fill="#e3f2fd" />
                <text x="50" y="42" textAnchor="middle" fontSize="8" fill="#c62828" fontWeight="bold">विश्व पत्रकार</text>
                <text x="50" y="56" textAnchor="middle" fontSize="8" fill="#c62828" fontWeight="bold">महासंघ</text>
              </svg>
            </div>
          </div>

          <div className="org-name">विश्व पत्रकार महासंघ </div>
          <div className="org-subtitle">(पत्रकारों का वैश्विक पंजीकृत संगठन)</div>
          <div className="contact-info">
            E-mail:info.vpm2006@gmail.com | WebSite: vpmh.org<br />
            Office No.: 7084250799, 6393287185
          </div>
        </div>

        {/* ====== CARD BODY ====== */}
        <div className="card-body">
          <div className="oval-container">
            {/* OVAL BACKGROUND - LOGO IN CENTER (globe removed) */}
            <div className="oval-bg">
              <img
                src="/logo.png"
                alt="Logo Watermark"
                className="oval-logo"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>

            {/* PHOTO AREA */}
            <div className="photo-area" onClick={onPhotoClick}>
              {photoPreview ? (
                <img src={photoPreview} alt="Member" className="member-photo" />
              ) : (
                <div className="photo-placeholder-card">
                  <span>📷</span>
                  <p>Upload<br />Photo</p>
                </div>
              )}
            </div>

            {/* INFO FIELDS */}
            <div className="info-fields">
              <div className="info-row">
                <span className="info-label">आई कार्ड संख्या</span>
                <span className="info-separator">: ......</span>
                <span className="info-value">{cardNo}</span>
              </div>
              <div className="info-row">
                <span className="info-label">नाम</span>
                <span className="info-separator">: ......</span>
                <span className="info-value">{name}</span>
              </div>
              <div className="info-row">
                <span className="info-label">पद</span>
                <span className="info-separator">: ......</span>
                <span className="info-value">{designation}</span>
              </div>
              <div className="info-row">
                <span className="info-label">कार्यक्षेत्र</span>
                <span className="info-separator">: ......</span>
                <span className="info-value">{area}</span>
              </div>
              <div className="info-row">
                <span className="info-label">पता</span>
                <span className="info-separator">: ......</span>
                <span className="info-value">{address}</span>
              </div>
              <div className="info-row">
                <span className="info-label">मो. नं</span>
                <span className="info-separator">: ......</span>
                <span className="info-value">{mobile}</span>
              </div>
            </div>

            {/* PENS */}
            <div className="pen-left">
              <svg viewBox="0 0 100 20" width="80" height="16">
                <rect x="0" y="7" width="75" height="4" fill="#5d4037" rx="2" />
                <rect x="75" y="5" width="18" height="8" fill="#ffd700" rx="1" />
                <polygon points="93,7 100,9 93,11" fill="#ffd700" />
              </svg>
            </div>
            <div className="pen-right">
              <svg viewBox="0 0 100 20" width="80" height="16">
                <rect x="22" y="7" width="75" height="4" fill="#5d4037" rx="2" />
                <rect x="7" y="5" width="15" height="8" fill="#ffd700" rx="1" />
                <polygon points="7,7 0,9 7,11" fill="#ffd700" />
              </svg>
            </div>
          </div>

          {/* STAMPS */}

          {/* SIGNATURES - Only images, no stamp circles */}
          {/* SIGNATURES - Left & Right side */}
          <div className="stamps-area">
            <div className="stamp-box-left">
              <img
                src="/signature1.png"
                alt="Signature"
                style={{ width: '260px', height: '100px', objectFit: 'contain', display: 'block' }}
              />
              <div style={{ width: '260px', height: '20px', borderBottom: '1px solid #333', marginTop: '5px' }}></div>
              <div className="stamp-title">हस्ता० राष्ट्रीय महासचिव/ट्रस्टी</div>
            </div>
            <div className="stamp-box-right">
              <img
                src="/signature2.png"
                alt="Signature"
                style={{ width: '200px', height: '100px', objectFit: 'contain', display: 'block' }}
                onError={(e) => e.target.style.display = 'none'}
              />
              <div style={{ width: '200px', height: '20px', borderBottom: '1px solid #333', marginTop: '5px' }}></div>
              <div className="stamp-title">हस्ता० राष्ट्रीय अध्यक्ष/संस्थापक</div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="bottom-section">
            <div className="registration-text">
              आज दिनांक <span className="highlight">{regDate || '30/11/2006'}</span> को वही स. <span className="highlight">4</span> जिल्द स. <span className="highlight">281</span><br />
              पृष्ठ स. <span className="highlight">95</span> से <span className="highlight">122</span> पर क्रमांक <span className="highlight">547</span> रजिस्ट्रीकृत किया गया है।
            </div>

            <div className="validity-box">
              <span className="validity-text">
                card valid from {validFromFormatted || '01/01/2026'} to {validToFormatted || '31/12/2026'}
              </span>
            </div>

            <div className="terms-title">Term & Condition</div>
            <ol className="terms-list">
              <li>यदि विश्व पत्रकार महासंघ के सदस्य एवं पदाधिकारी हेतु राष्ट्र/ समाज व विश्वपत्रकार महासंघ के संविधान के विपरीत एवं अन्य अवैधानिक कार्यों में लिप्त पाए जाते हैं तो उनकी सदस्यता एवं पद तत्काल स्वतः समाप्त मानी जायेगी। और विश्व पत्रकार महासंघ उचित कार्य करने के लिय अधिकृत मान्य होगा।</li>
              <li>विश्व पत्रकार महासंघ के द्वारा जारी किए गए परिचय पत्र का दुरुपयोग किसी भी स्तर पर नहीं करना होगा। ना ही करने दिया जाएगा।</li>
              <li>कार्ड खो जाने के स्थिति में कार्यालय या नजदीकी पुलिस स्टेशन में सूचित करें।</li>
            </ol>

            <div className="footer-contact">
              <span>📞 6393287185</span>
              <span>💬 @Vmahasangh</span>
              <span>📘 Vishwapatrakar mahasangh</span>
              <span>▶️ Vishwapatrakarmahasangh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default IDCard
