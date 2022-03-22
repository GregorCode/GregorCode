import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Comments = () => {
  //const url = 'https://utteranc.es/client.js';
  const { theme } = useTheme();
  const comment = useRef(null);
  //const [status, setStatus] = useState(url ? 'loading' : 'idle');

  useEffect(() => {
    //SI NO ESTA ACTIVO EL CLIENTE DE UTTERANCE HAGO RETURN
    // if (!url) {
    //   setStatus('idle');
    //   return;
    // }
    const actualUrl = window.location.href;
    console.log(actualUrl);

    //ESTO LO HAGO POR EL CAMBIO DE TEMA, CADA VEZ QUE CAMBIO DE TEMA SE DUPLICA, CON ESTO EL TEMA QUE ESTA LO ELIMINO Y LO CREO DE NUEVO
    function eliminarCajaComentarios() {
      let div = document.getElementById('comentarios');
      if (div !== null) {
        while (div.hasChildNodes()) {
          div.removeChild(div.lastChild);
        }
      }
    }
    eliminarCajaComentarios();

    //CREO EL SCRIPT PARA LA CAJA DE COMENTARIOS
    let script = document.createElement('script');
    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('async', true);
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('theme', theme === 'light' ? 'github-light' : 'github-dark');
    script.setAttribute('issue-term', 'FTP con Docker-compose');
    script.setAttribute('repo', process.env.COMMENT_BLOG);

    // Add script to document body
    comment.current.appendChild(script);

    // store status of the script

    // const setAttributeStatus = (event) => {
    //   setStatus(event.type === 'load' ? 'ready' : 'error');
    // };

    // script.addEventListener('load', setAttributeStatus);
    // script.addEventListener('error', setAttributeStatus);

    // return () => {
    //   // useEffect clean up
    //   if (script) {
    //     script.removeEventListener('load', setAttributeStatus);
    //     script.removeEventListener('error', setAttributeStatus);
    //   }
    // };
  }, [theme, comment]);

  return <div className="w-full">{<div id="comentarios" ref={comment}></div>}</div>;
};

export default Comments;
