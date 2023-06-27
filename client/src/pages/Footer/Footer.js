import './footer.css'

const Footer = () => {
  const  year =new Date().getFullYear()
  return (
    
    <footer className='footer_container'>
        <p className="footer_year">&copy;beachgrill {year}</p>
    </footer>

    
  )
}
export default Footer