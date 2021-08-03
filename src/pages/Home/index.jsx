import React, {useState} from 'react';
import Slider from "react-slick";
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';
import { Container, Carousel, Search, Logo, Wrapper, Map, CarouselTitle } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

    return (
        <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="Logo do restaurante"/> 
                <TextField 
                    label="Pesquisar Restaurantes"
                    outlined

                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                >
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                </TextField>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                    <Card photo={restaurante} title="Nome aqui!"/>
                    <Card photo={restaurante} title="Nome aqui!"/>                    <Card photo={restaurante} />
                    <Card photo={restaurante} title="Nome aqui!"/>                    <Card photo={restaurante} />
                    <Card photo={restaurante} title="Nome aqui!"/> 
                    <Card photo={restaurante} title="Nome aqui!"/>
                    <Card photo={restaurante} title="Nome aqui!"/>
                    <Card photo={restaurante} title="Nome aqui!"/>
                    <Card photo={restaurante} title="Nome aqui!"/>                   
                </Carousel>
            </Search> 
        </Container>
        <Map/>
        </Wrapper>
        
    );
};

export default Home;
