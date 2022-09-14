import './index.scss';

function App() {

  
  return (
    <div className="App">
      <div className='test'>sdfsdfdf</div>
      <header className="header">
        <nav className='nav container'>
          <a className='nav__logo'>Евген</a>
          <div className='nav__menu'>
            <ul className='nav__list grid'>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  <i class="uil uil-estate nav__icon"></i>главная
                </a>
              </li>        
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  <i class="uil uil-user nav__icon"></i>обо мне
                </a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  <i class="uil uil-estate nav__icon"></i>навыки
                </a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  <i class="uil uil-estate nav__icon"></i>услуги
                </a>
              </li>
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  <i class="uil uil-estate nav__icon"></i>проекты
                </a>
              </li>           
              <li className='nav__item'>
                <a href='#' className='nav__link'>
                  <i class="uil uil-estate nav__icon"></i>контакты
                </a>
              </li>
            </ul>
            <i class="uil uil-times nav__close" id="nav-close"></i>
          </div>
          
          <div className='nav__btns'>
            {/* <i class="uil uil-moon change-theme" id="theme-button"></i> */}
            <div class="nav__toggle" id="nav-toggle">
              <i class="uil uil-apps"></i>
            </div>
          </div>
        </nav>
        <p>
          
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel=""
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
