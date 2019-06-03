import React from 'react';
import Category from '../../src/components/category';
import ImageView from '../../src/components/imageView';

import HomeLayout from '../../src/layouts/homeLayout';

import './gallery.css';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    const imagesUrl = process.env.GALLERY_IMAGES.split(',');

    this.state = {
      imagesYear: 2017,
      imagesUrl,
      imageViewIndex: null,
    };

    this.setImagesYear = this.setImagesYear.bind(this);
    this.setImageViewIndex = this.setImageViewIndex.bind(this);
  }

  setImagesYear(i) {
    if (this.state.imagesYear !== i) {
      this.setState({
        imagesYear: i,
      });
    }
  }

  setImageViewIndex(i) {
    this.setState({
      imageViewIndex: i,
    });
  }

  render() {
    const filteredImages = [];
    const filteredImagesUrl = [];

    if (this.state.imagesUrl && this.state.imagesYear) {
      let i = -1;

      this.state.imagesUrl.forEach(url => {
        if (url.substring(0, 22) === `./static/gallery/${this.state.imagesYear}-`) {
          i++;

          filteredImages.push(
            <div
              className="a-gallery__image__container"
              key={i}
              onClick={this.setImageViewIndex.bind(this, i)}
            >
              <img src={url} alt="" />
            </div>
          );

          filteredImagesUrl.push(url);
        }
      });
    }

    return (
      <HomeLayout
        title="Galerie"
        url="/gallery"
        description="Voici les photos des éditions de l'UTT Arena des années précédentes."
      >
        <main className="a-gallery">
          <Category>Galerie</Category>

          <div className="a-gallery__year__buttons">
            <div
              className={`a-gallery__year__button${
                this.state.imagesYear === 2016 ? ' active' : ''
              }`}
              onClick={() => this.setImagesYear(2016)}
            >
              2016
            </div>
            <div
              className={`a-gallery__year__button${
                this.state.imagesYear === 2017 ? ' active' : ''
              }`}
              onClick={() => this.setImagesYear(2017)}
            >
              2017
            </div>
          </div>

          <div className="a-gallery__content">{filteredImages}</div>

          <ImageView
            src={filteredImagesUrl}
            index={this.state.imageViewIndex}
            setIndex={this.setImageViewIndex}
          />
        </main>
      </HomeLayout>
    );
  }
}
