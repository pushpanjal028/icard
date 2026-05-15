import { useState, useRef, useCallback } from 'react'
import IDCard from './components/IDCard'
// import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image'
function App() {
  // Form State
  const [formData, setFormData] = useState({
    cardNo: '',
    name: '',
    designation: '',
    area: '',
    address: '',
    mobile: '',
    photo: null,
    validFrom: '2026-01-01',
    validTo: '2026-12-31',
    regDate: new Date().toLocaleDateString('en-GB').replace(/\//g, '/')
  })

  const [photoPreview, setPhotoPreview] = useState(null)
  const cardRef = useRef(null)
  const fileInputRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPhotoPreview(event.target.result)
        setFormData(prev => ({ ...prev, photo: event.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerPhotoUpload = () => {
    fileInputRef.current?.click()
  }

  const formatDate = (dateStr) => {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
  }

  

const downloadCard = useCallback(async () => {
  if (!cardRef.current) return
  
  // Wait for images
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  try {
    // Wrapper se download karo, card se nahi
    const dataUrl = await domtoimage.toPng(cardRef.current, {
      quality: 1,
      bgcolor: '#ffffff',
      width: cardRef.current.offsetWidth + 30,    /* ← padding include */
      height: cardRef.current.offsetHeight + 30,
      style: {
        margin: '15px',        /* ← force margin */
        padding: '15px',       /* ← force padding */
        backgroundColor: 'white'
      }
    })
    
    const link = document.createElement('a')
    link.download = `ID_Card_${formData.name || 'Vishwa_Patrakar'}.png`
    link.href = dataUrl
    link.click()
  } catch (err) {
    console.error('Download failed:', err)
    alert('Error generating image. Please try again.')
  }
}, [formData.name])

  const printCard = () => {
    window.print()
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>🎴 Vishwa Patrakar Mahasangh</h1>
        <p>Official ID Card Generator</p>
      </div>

      <div className="app-layout">
        {/* LEFT: Form Section */}
        <div className="form-panel">
          <div className="panel-header">
            <h2>📝 Enter Details</h2>
          </div>

          <div className="form-content">
            {/* Photo Upload */}
            <div className="form-group photo-group">
              <label>Upload Photo</label>
              <div className="photo-upload-box" onClick={triggerPhotoUpload}>
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="photo-preview-thumb" />
                ) : (
                  <div className="photo-placeholder">
                    <span>📷</span>
                    <p>Click to upload photo</p>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden-input"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>ID Card No (आई कार्ड संख्या)</label>
                <input
                  type="text"
                  name="cardNo"
                  value={formData.cardNo}
                  onChange={handleInputChange}
                  placeholder="e.g. 001"
                />
              </div>
              <div className="form-group">
                <label>Name (नाम)</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter full name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Designation (पद)</label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="e.g. Reporter"
                />
              </div>
              <div className="form-group">
                <label>Working Area (कार्यक्षेत्र)</label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="e.g. Delhi"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address (पता)</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter complete address"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mobile (मो. नं)</label>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="e.g. 9876543210"
                />
              </div>
              <div className="form-group">
                <label>Reg Date (पंजीकरण तिथि)</label>
                <input
                  type="text"
                  name="regDate"
                  value={formData.regDate}
                  onChange={handleInputChange}
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Valid From</label>
                <input
                  type="date"
                  name="validFrom"
                  value={formData.validFrom}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Valid To</label>
                <input
                  type="date"
                  name="validTo"
                  value={formData.validTo}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-actions">
              <button className="btn btn-primary" onClick={downloadCard}>
                📥 Download ID Card
              </button>
              <button className="btn btn-secondary" onClick={printCard}>
                🖨️ Print Card
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: Preview Section */}
        <div className="preview-panel">
          <div className="panel-header">
            <h2>👁️ Live Preview</h2>
          </div>
          <div className="preview-area">
            <IDCard
              ref={cardRef}
              data={{
                ...formData,
                validFromFormatted: formatDate(formData.validFrom),
                validToFormatted: formatDate(formData.validTo)
              }}
              photoPreview={photoPreview}
              onPhotoClick={triggerPhotoUpload}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App