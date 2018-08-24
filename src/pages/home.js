import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBook, faFileCode, faChartLine, faPuzzlePiece, faStopwatch } from '@fortawesome/fontawesome-free-solid';
import logo from '../images/pytorch.png';
import background from '../images/background.png';
import hljs from 'highlight.js';
import ReactDOM from 'react-dom';


class Code extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    const domNode = ReactDOM.findDOMNode(this);
    const nodes = domNode.querySelectorAll('pre code');

    let i;
    for (i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    const {className, children, ...props} = this.props;

		return (
			<pre {...props}>
				<code className={className}>{children}</code>
			</pre>
		);
  }
}


class Home extends React.Component {
  render() {
    let backgroundStyle = {
      backgroundImage: "url(" + background + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return (
      <div>
        <div className="jumbotron jumbotron-fluid shadow-bottom mb-8" style={backgroundStyle}>
          <div className="container text-center">
            <div className="row">
              <div className="col-12">
                <h1 className="display-3 font-weight-bold">GPyTorch</h1>
                <h2 className="font-weight-light h3">
                  Gaussian processes for <em>modern</em> machine learning systems.
                </h2>
                <div className="m-4">
                  <img style={{maxHeight: "150px"}} src={logo} alt="logo" />
                </div>
                <p className="lead font-weight-light h5">
                  <span className="d-block mb-1">A highly efficient and modular implementation of GPs, with GPU acceleration.</span>
                  <strong className="font-weight-light">Implemented in <a href="http://pytorch.org" target="_blank" rel="noopener noreferrer">PyTorch</a>.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-8 mb-8">
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

        <div id="install" className="jumbotron jumbotron-fluid shadow-top mt-8 mb-0">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="display-4 font-weight-bold">Installation</h2>
                <Code className="shell pl-4 pr-4 pt-3 pb-3 mb-3 mt-3">
pip install git+https://github.com/cornellius-gp/gpytorch.git
                </Code>
                <p>
                  For more instructions, see the <a href="http://github.com/cornellius-gp/gpytorch" rel="noopener noreferrer" target="_blank">Github README</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-8 mb-8">
          <div className="row">
            <div className="col-12 col-sm-6 text-center">
              <h2 className="display-5">Examples</h2>
              <div className="pt-2">
                <FontAwesomeIcon icon={faFileCode} size="4x" title="Examples" className="align-middle d-inline-block" />
              </div>
              <div className="pt-3 mb-4">
                <a href="https://gpytorch.readthedocs.io/" role="button" className="btn btn-outline-info">Browse Examples</a>
              </div>
            </div>
            <div className="col-12 col-sm-6 text-center">
              <h2 className="display-5">Documentation</h2>
              <div className="pt-2">
                <FontAwesomeIcon icon={faBook} size="4x" title="Docs" className="align-middle d-inline-block" />
              </div>
              <div className="pt-3 mb-4">
                <a href="https://gpytorch.readthedocs.io/" role="button" className="btn btn-outline-info">Browse Docs</a>
              </div>
            </div>
          </div>
        </div>

        <div id="install" className="jumbotron jumbotron-fluid shadow-top mt-8 mb-0">
          <div className="container mt-8 mb-8">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="display-4 font-weight-bold">The Team</h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-8 offset-md-2 text-center">
                <ul className="list-group">
                  <li className="list-group-item bg-light">
                    <a href="http://geoffpleiss.com">
                      <img src="https://avatars2.githubusercontent.com/u/824157?s=460&v=4" alt="Geoff Pleiss" width="100px" />
                      <h3 className="ml-5 d-inline-block">Geoff Pleiss</h3>
                    </a>
                  </li>
                  <li className="list-group-item bg-light">
                    <a href="http://http://www.cs.cornell.edu/~jgardner/">
                      <img src="https://avatars3.githubusercontent.com/u/4016393?s=460&v=4" alt="Jacob R. Gardner" width="100px" />
                      <h3 className="ml-5 d-inline-block">Jacob R. Gardner</h3>
                    </a>
                  </li>
                  <li className="list-group-item bg-light">
                    <a href="https://people.orie.cornell.edu/andrew/">
                      <img src="https://people.orie.cornell.edu/andrew/andrewcropfast.jpg" alt="Andrew Gordon Wilson" width="100px" />
                      <h3 className="ml-5 d-inline-block">Andrew Gordon Wilson</h3>
                    </a>
                  </li>
                  <li className="list-group-item bg-light">
                    <a href="http://kilian.cs.cornell.edu/">
                      <img src="http://kilian.cs.cornell.edu/files/2015_1300_026.jpg" alt="Kilian Q. Weinberger" width="100px" />
                      <h3 className="ml-5 d-inline-block">Kilian Q. Weinberger</h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <figure>
                  <img className="figure-img" alt="Cornell University" src="https://brand.cornell.edu/assets/images/downloads/logos/cornell_logo_simple/cornell_logo_simple.svg" width="450px" /> 
                  <figcaption className="figure-caption">Developed at Cornell University, with funding from the <a href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer">Bill and Melinda Gates Foundation</a>.</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
