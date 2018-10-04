import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBook, faFileCode, faChartLine, faPuzzlePiece, faStopwatch } from '@fortawesome/fontawesome-free-solid';
import logo from '../images/pytorch.png';
import kilian from '../images/kilian.png';
import andrew from '../images/andrew.jpg';
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


class TeamMember extends React.Component {
  render() {
    const {name, href, img, ...props} = this.props;

    return (
      <li className="list-group-item bg-light">
        <div className="container">
          <div className="row">
            <div className="col-4 col-sm-3 col-lg-3 text-left text-md-right">
              <img className="img-responsive" src={img} alt={name} style={{width: "100%", maxWidth: "100px"}} />
            </div>
            <div className="col-8 col-sm-9 col-lg-6 align-self-center text-left text-lg-center">
              <h3 className="h4" {...props}>
                <a href={href}>{name}</a>
              </h3>
            </div>
          </div>
        </div>
      </li>
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
                <div className="alert alert-primary pt-3 pb-3 ht-3" role="alert">
                  <strong>GPyTorch 0.1.0 is out!</strong>
                  <br />
                  If you are coming from the alpha relase of GPyTorch, check out
                  our <a href="https://github.com/cornellius-gp/gpytorch/wiki/Migration-guide-from-alpha-to-beta" target="_blank" rel="noopener noreferrer">Migration Guide</a>.
                </div>
                <div className="alert alert-warning pt-3 pb-3" role="alert">
                  <strong>GPyTorch requires Python 3 and the PyTorch preview version (>=1.0)</strong>
                  <br />
                  You should install the <strong>pytorch-nightly</strong> package, not the stable version.
                </div>
                <p className="pt-3">
                  Make sure you have <a href="https://pytorch.org/get-started/locally/">PyTorch preview installed</a> (at least version 1.0.0).
                </p>
                <Code className="shell pl-4 pr-4 pt-3 pb-3 mb-3 mt-3">
pip install gpytorch
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
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="display-4 font-weight-bold">The Team</h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-8 offset-md-2">
                <ul className="list-group">
                  <TeamMember name="Geoff Pleiss" href="http://geoffpleiss.com" img="https://avatars2.githubusercontent.com/u/824157?s=460&v=4" />
                  <TeamMember name="Jacob R. Gardner" href="https://jacobrgardner.github.io/" img="https://jacobrgardner.github.io/images/me.jpg" />
                  <TeamMember name="Kilian Q. Weinberger" href="http://kilian.cs.cornell.edu/" img={kilian}/>
                  <TeamMember name="Andrew Gordon Wilson" href="https://people.orie.cornell.edu/andrew/" img={andrew} />
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-8 offset-md-2">
                <p className="text-center">
                  <strong>With (many) contributions from:</strong>
                  &nbsp;
                  Max Balandat,
                  David Arbour,
                  Eytan Bakshy,
                  Karthik Rajkumar,
                  Sam Stanton,
                  Ruihan Wu,
                  Bram Wallace,
                  Jared Frank,
                  and others!
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-8 offset-md-2 text-center">
                <figure>
                  <img className="figure-img img-responsive" alt="Cornell University" src="https://brand.cornell.edu/assets/images/downloads/logos/cornell_logo_simple/cornell_logo_simple.svg" style={{width: "450px", maxWidth: "100%"}} /> 
                  <figcaption className="figure-caption pt-3">Developed at Cornell University, with funding from <a href="https://research.fb.com/">Facebook</a> and the <a href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer">Bill and Melinda Gates Foundation</a>.</figcaption>
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
