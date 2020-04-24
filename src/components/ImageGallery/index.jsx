import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import './imageGallery.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default function DraggableImages(props) {
  // maintain drag image index
  let [dragIndex, setDragIndex] = useState(null);
  let [dropedIndex, setDropedIndex] = useState(null);

  // Store images array to local state to allow image swapping without modifying original images array
  let [images, setImages] = useState(props.images);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setImages(props.images);
  }, [props.images]);

  function onDrop(event, index) {
    if ((dragIndex || dragIndex === 0) && dragIndex !== index) {
      setDropedIndex(index);
      setModal(true);
    }
  }

  function onDragStart(event, index) {
    setDragIndex(index);
  }

  function onDragOver(event) {
    event.preventDefault();
  }

  // Swap image: ${dragIndex} with image: ${index}
  function swapImages() {
    let temp = images[dragIndex];
    images[dragIndex] = images[dropedIndex];
    images[dropedIndex] = temp;
    setImages([...images]);
    toggle();
  }

  const toggle = useCallback(() => {
    setModal(!modal);
    setDragIndex(null);
    setDropedIndex(null);
  }, [modal]);

  function renderImages() {
    return images.map((image, index) => {
      return (
        <div className="imageGalleryList mb-3 m-sm-1 overflow-hidden position-relative w-100"
          key={image + index}
          draggable
          onDragStart={e => onDragStart(e, index)}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, index)}
        >
          <img src={image} alt={image}/>
          <div className="drag-text d-flex align-items-center justify-content-center">
            <h4 className="mb-0 text-white">Drag Image</h4>
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="imageGalleryContainer">
        <div className="imageGalleryRow d-flex align-items-center justify-content-center flex-wrap flex-column flex-sm-row">
          {renderImages()}
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm</ModalHeader>
        <ModalBody>
          Do you want to replace Image {dragIndex + 1} for Image {dropedIndex + 1} ?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={swapImages}>Replace</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  )
}

DraggableImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DraggableImages.defaultProps = {
  images: [],
};
