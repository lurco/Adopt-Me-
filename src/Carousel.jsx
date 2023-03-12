import { Component } from "react";

class Carousel extends Component {
    state = {
        active: 0,
    };

    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    handleIndexClick = (event) => {
        this.setState({
            active: parseInt(event.target.dataset.index),
        });
    };

    render() {
        const { images } = this.props;
        const { active } = this.state;

        return (
            <div className="carousel">
                <img src={images[active]} alt="animal" />
                <div className="carousel-smaller">
                    {images.map((img, idx) => (
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
                        <img
                            key={img}
                            src={img}
                            alt="animal_thumbnail"
                            className={idx === active ? "active" : ""}
                            data-index={idx}
                            onClick={this.handleIndexClick}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
