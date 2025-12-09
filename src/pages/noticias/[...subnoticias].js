import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function Page() {
    const router = useRouter()
    const  subnoticias  = router.query.subnoticias
    return <>
        <Container className="text-center">
            <h1>Sub-Notícias:</h1>
                {Array.isArray(subnoticias)
                ? subnoticias.map((subnoticia, index) =>(
                    <p>Subnoticia: <b>{subnoticia}</b>, Indice do Vetor: <b>{index}</b></p>
                )):null}
        </Container>
    </>
}