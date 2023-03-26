import { Component, MouseEvent } from "react";

interface IProps {
    images: string[];
    activeImage: number;
    setActiveImage: (activeImage: number) => void;
}

class Carousel extends Component<IProps> {
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
    };

    handleIndexClick = (event: MouseEvent<HTMLElement>) => {
        if (!(event.target instanceof HTMLElement)) {
            return;
        }
        if (event.target.dataset.index) {
            this.props.setActiveImage(parseInt(event.target.dataset.index));
        }
    };

    render() {
        const { images, activeImage: active } = this.props;

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
