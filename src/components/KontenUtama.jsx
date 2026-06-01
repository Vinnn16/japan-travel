import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles/KontenUtama.css";

function KontenUtama() {
    return (
        <div className="Mybg">
        <Container>
            <div className="page-1">
                <Row>
                    <Col sm={4}>
                        <div className="tokyo">
                            <img
                                className="gambar-tokyo"
                                src="https://images.pexels.com/photos/30117629/pexels-photo-30117629/free-photo-of-gerbang-kuil-tradisional-jepang-di-minato-tokyo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <p className="text-header-tokyo">TOKYO</p>
                            <p className="text-tokyo">Tokyo, the vibrant capital of Japan, is a city that seamlessly blends traditional and modern culture. From the neon-lit skyscrapers</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="kawaguchiko">
                            <img
                                className="gambar-kawaguchiko"
                                src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <p className="text-header-kawaguchiko">KAWAGUCHIKO</p>
                            <p className="text-kawaguchiko">Kawaguchiko is a popular lake resort town in Yamanashi Prefecture, Japan, located at the foot of Mount Fuji.</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="kyoto">
                            <img className="gambar-kyoto" src="https://images.pexels.com/photos/356629/pexels-photo-356629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <p className="text-header-kyoto">KYOTO</p>
                            <p className="text-kyoto">Kyoto, a city steeped in tradition and culture, is known for its stunning temples and shrines, including the iconic Fushimi Inari Shrine</p>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="page-2">
                <Row>
                    <Col sm={4}>
                    <div className="shirakawago">
                        <img className="gambar-shirakawago" src="https://images.pexels.com/photos/16592317/pexels-photo-16592317/free-photo-of-dingin-salju-kayu-pemandangan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        <p className="text-header-shirakawago">SHIRAKAWAGO</p>
                        <p className="text-shirakawago">Shirakawago is a traditional village in Japan's Gifu Prefecture, known for its well-preserved traditional thatched-roof houses.</p>
                    </div>
                    </Col>
                    <Col sm={4}>
                        <div className="osaka">
                            <img className="gambar-osaka" src="https://images.pexels.com/photos/2365159/pexels-photo-2365159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <p className="text-header-osaka">OSAKA</p>
                            <p className="text-osaka">Osaka, a vibrant city in western Japan known for its rich food culture, stunning castles, and lively entertainment districts.</p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="hokkaido">
                            <img className="gambar-hokkaido" src="https://images.pexels.com/photos/2031689/pexels-photo-2031689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                            <p className="text-header-hokkaido">HOKKAIDO</p>
                            <p className="text-hokkaido">Hokkaido is Japan's northernmost island and is known for its stunning natural beauty, including its rugged mountains.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
                                </div>
    );
}

export default KontenUtama;
