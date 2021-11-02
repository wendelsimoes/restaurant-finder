import React, { useDebugValue, useState } from "react";
import { Container, Search, Logo, Wraper, Map, CarouselTitle } from "./style";
import logo from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from "@material/react-material-icon";
import restaurante from '../../assets/restaurante-fake.png'
import Slider from "react-slick";
import { Card, RestaurantCard, Modal } from "../../components";
import { Carousel } from "./style";

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
      };

    return (
        <Wraper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title={'nome sei la'}/>
                        <Card photo={restaurante} title={'nome sei la'}/>
                        <Card photo={restaurante} title={'nome sei la'}/>
                        <Card photo={restaurante} title={'nome sei la'}/>
                        <Card photo={restaurante} title={'nome sei la'}/>
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
        </Wraper>
    );
};
export default Home;
