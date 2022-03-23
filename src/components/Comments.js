import { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

const Comments = () => {
  const { theme } = useTheme();
  const comment = useRef(null);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    //ESTO LO HAGO PARA MOSTRAR LOS COMENTARIOS DE INGLES Y ESPANOL DEL POST, uso pathname de utterance, ejemplo: /posts/nombre-del-post
    const url = window.location.pathname;
    url = url.replace('/en/', '/');

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
    script.setAttribute('issue-term', url);
    script.setAttribute('repo', process.env.COMMENT_BLOG);

    // AGREGO EL SCRIPT AL DOCUMENT BODY
    comment.current.appendChild(script);
  }, [theme, comment, locale]);

  return <div className="w-full">{<div id="comentarios" ref={comment}></div>}</div>;
};

export default Comments;
