import './styles.css'
import { ReactComponent as YoutubeIcon} from './youtube.svg'
import { ReactComponent as LinkedinIcon} from './linkedin.svg'
import { ReactComponent as InstagramIcon} from './instagram.svg'

function Footer(){
  return(
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a target="_new" href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g?feature=emb_ch_name_ex">
          <YoutubeIcon/>
        </a>
        <a target="_new" href="https://www.linkedin.com/in/carlos-eduardo-6818001a7/">
        <LinkedinIcon/>
        </a>
        <a target="_new" href="https://www.instagram.com/devsuperior.ig/">
        <InstagramIcon/>
        </a>
        
      </div>
    </footer>
  )
}

export default Footer;