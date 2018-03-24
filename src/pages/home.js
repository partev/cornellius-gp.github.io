import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChartLine, faPuzzlePiece, faStopwatch } from '@fortawesome/fontawesome-free-solid';
import logo from '../images/pytorch.png';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <div className="row">
              <div className="col-12">
                <h1 className="display-3 font-weight-bold">GPyTorch</h1>
                <h2 className="font-weight-light h3">
                  Gaussian processes for <em>modern</em> machine learning systems.
                </h2>
                <div className="m-4">
                  <img style={{maxHeight: "150px"}} src={logo} />
                </div>
                <p className="lead font-weight-light h5">
                  <span className="d-block mb-1">A highly efficient and modular implementation of GPs, with GPU acceleration.</span>
                  <strong className="font-weight-light">Implemented in <a href="http://pytorch.org" target="_blank">PyTorch</a>.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="text-center">
                <FontAwesomeIcon icon={faChartLine} size="3x" title="About" className="align-middle" />
              </div>
              <div className="text-center ml-3 mr-3">
                <h3>Scalablity</h3>
                <p>
                  Train Gaussian processes with <em>millions</em> of data points.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="text-center">
                <FontAwesomeIcon icon={faPuzzlePiece} size="3x" title="About" className="align-middle" />
              </div>
              <div className="text-center ml-3 mr-3">
                <h3>Modular Design</h3>
                <p>
                  Combine Gaussian processes with <em>deep neural networks</em> and more. 
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 offset-md-3 offset-lg-0 col-lg-4">
              <div className="text-center">
                <FontAwesomeIcon icon={faStopwatch} size="3x" title="About" className="align-middle" />
              </div>
              <div className="text-center ml-3 mr-3">
                <h3>Speed</h3>
                <p>
                  Utilize <strong>GPU acceleration</strong> and state-of-the-art inference algorithms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
