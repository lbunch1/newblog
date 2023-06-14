import './Footer.css';

export default function() {
  const date = new Date()
  return (
    <>
      <footer>
        Copyright &copy; Logan Bunch {date.getFullYear()}
      </footer>
    </>
  )
}
