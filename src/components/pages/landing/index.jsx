import './landingpage.css'
import Button from '@mui/material/Button'
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

export const LandingPage = () => (
    <div className='landing-page'>
        <div className='landing-canvas'>
            <h1 className='canvas-title'>
                Gestão de processos minerários na
                <strong className='canvas-title-strong'> ANM</strong>
            </h1>
            <p>
                Texto de apoio
            </p>
            <p>opcional</p>
            <h1 className='conta-button'>
                <Button  sx={{
                    color:'inherit',
                    backgroundColor: 'inherit',
                }}>
                        <p className="login-button-description">Crie Sua Conta</p>
                </Button>
            </h1>
        </div>
        <section className='landing-benefits'>
            <div className='benefits'>
                <h2 className='benefits-title'>
                    Gestão simples e automatizada dos seus processos
                </h2>
                <ul className='benefits-list'>
                    <li className='benefits-list-element'>
                        <div className='benefits-list-element-icon'>
                            <ContentPasteSearchIcon fontSize='large'/>
                        </div>
                        <div className='benefits-list-element-content'>
                            <h3 className='benefits-list-element-content-title'>Busca por processos</h3>
                            <p className='benefits-list-element-content-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </li>
                    <li className='benefits-list-element'>
                        <div className='benefits-list-element-icon'>
                            <ContentPasteSearchIcon fontSize='large'/>
                        </div>
                        <div className='benefits-list-element-content'>
                            <h3 className='benefits-list-element-content-title'>PLGs com poligonal em áreas de restrição</h3>
                            <p className='benefits-list-element-content-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </li>
                    <li className='benefits-list-element'>
                        <div className='benefits-list-element-icon'>
                            <ContentPasteSearchIcon fontSize='large'/>
                        </div>
                        <div className='benefits-list-element-content'>
                            <h3 className='benefits-list-element-content-title'>PLGs sem licença ambiental</h3>
                            <p className='benefits-list-element-content-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </li>
                    <li className='benefits-list-element'>
                        <div className='benefits-list-element-icon'>
                            <ContentPasteSearchIcon fontSize='large'/>
                        </div>
                        <div className='benefits-list-element-content'>
                            <h3 className='benefits-list-element-content-title'>Dados geoespaciais</h3>
                            <p className='benefits-list-element-content-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
)