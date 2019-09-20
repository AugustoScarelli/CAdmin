import React from 'react'

import Typography from '@material-ui/core/Typography'
import { unstable_Box as Box } from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import NewWindow from 'react-new-window'


class CurriculumExtraWindow extends React.Component {

    constructor(props) {
        super(props)

    }

    /**
     * A implementar método.
     * 
     * Problema: A biblioteca html2canvas não detecta a janela exterior,
     * assim causando erro de ownership.
     */
    generatePdf = () => {
        // const input = document.getElementById('printable');

        // html2canvas(input)
        // .then((canvas) => {
        //     const imgData = canvas.toDataURL('image/png');
        //     const pdf = new jsPDF();
        //     pdf.addImage(imgData, 'PNG', 0, 0);
        //     pdf.save("download.pdf");
        // });
    }



    render() {
        return(
            <NewWindow onUnload={() => this.props.isWindowUnloaded()}>
                {/* <Button color='primary' variant='contained' onClick={this.generatePdf}>Gerar PDF</Button> */}
                <Typography color='textPrimary' align='center'>
                    <p>Pressione CTRL+P para Imprimir ou Baixar</p>
                </Typography>
                <div id="printable">
                    <Box ml={3} mt={2}>
                        <Typography color='textPrimary' align='left' variant='h4' component='h4'>
                            {this.props.name}
                        </Typography>

                        <Box mt={3}>
                            <Typography color='textPrimary' align='left'>
                                Data de Nascimento Teste: {this.props.birthdate}
                            </Typography>
                            <Typography color='textPrimary' align='left'>
                                Endereço: {this.props.address}, {this.props.city}
                            </Typography>
                            <Typography color='textPrimary' align='left'>
                                Telefone: {this.props.phone}
                            </Typography>
                            <Typography color='textPrimary' align='left'>
                                E-Mail: {this.props.email}
                            </Typography>
                            {/* Talvez não seja necessário colocar o CID... */}
                            {/* <Typography color='textPrimary' align='left'>
                                CID: {this.props.cid}
                            </Typography> */}
                        </Box>

                        <Box mt={5}>
                            <Typography color='textPrimary' align='left' variant='h5' component='h5'>
                                EXPERIÊNCIA:
                            </Typography>
                            <Typography color='textPrimary' align='left'>
                                {this.props.profexperience == "Sim"?
                                (<p>* Contém experiência profissional prévia</p>) : 
                                (<p>* Não contém experiência profissional prévia</p>)}
                            </Typography>
                        </Box>

                        <Box mt={5}>
                            <Typography color='textPrimary' align='left' variant='h5' component='h5'>
                                FORMAÇÃO ACADÊMICA:
                            </Typography>
                            <Typography color='textPrimary' align='left'>
                                <p>* Grau de ensino: {this.props.highestgrade}</p>
                                {this.props.techcourse == "Sim"?
                                (<p>* Ensino Profissionalizante (Técnico)</p>) :
                                null}
                            </Typography>
                        </Box>
                    </Box>
                </div>
            </NewWindow>
        )
    }

}

export default CurriculumExtraWindow