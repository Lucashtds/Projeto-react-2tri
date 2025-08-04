
import Card from './Card';
import Menu from './Menu';
import './index.css'

function Header(){
    const biografia = "Estudante curso DS";
    return(
        <header>
          <Card 
            fotoPerfil="unnamed.jpg"
            nome="Lucas Henrique T Dos Santos" 
            biografia={biografia}
          />
          <Menu />
        </header>
    )
}

export default Header;