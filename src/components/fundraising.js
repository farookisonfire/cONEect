const React = require('react')

const Fundraising = () => {

  const campaign = () => {
    window.open('https://www.flipcause.com/widget/NzI4OA==')
  }

  return (
    <div
      style={{
        background:'#ccc',
        borderRadius: '0px',
        fontWeight: 'normal',
        fontFamily: 'Arial',
        width:'145px',
        height:'45px',
        lineHeight: '2.8',
        position: 'relative',
        fontSize: '16px',
        zIndex: '1'

      }}
      onClick={() => { window.open('https://www.flipcause.com/widget/NzI4OA==') } }
    >
      Donate Now
    </div>
  )
}

module.exports = Fundraising
