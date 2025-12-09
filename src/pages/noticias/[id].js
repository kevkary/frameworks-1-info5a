import { Container } from 'react-bootstrap'
import Cards from '../components/cards'
export async function getServerSideProps(req) {
    const res = await fetch('https://fw2api.vercel.app/' + req.query._id)
    const repo = await res.json()
    return { props: { noticia: repo } }
}
export default function Page({ noticia }) {
    return <>
        <Container>
            <Cards _id={noticia._id} titulonoticia={noticia.titulonoticia}
                tiponoticia={noticia.tiponoticia}  conteudonoticia={noticia.conteudonoticia}
                datahoracadastro={noticia.datahoracadastro} />
        </Container>
    </>
}