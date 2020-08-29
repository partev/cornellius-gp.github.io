import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBook, faFileCode, faChartLine, faPuzzlePiece, faStopwatch } from '@fortawesome/fontawesome-free-solid';
import logo from '../images/pytorch.png';
import kilian from '../images/kilian.png';
import andrew from '../images/andrew.jpg';
import max from '../images/max.jpg';
import background from '../images/background.png';
import facebook_logo from '../images/facebook_logo.png'
import uber_ai_horizontal from '../images/uber_ai_horizontal.png'
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
                <div className="alert alert-warning pt-3 pb-3" role="alert">
                  <strong>GPyTorch requires Python >= 3.6 and PyTorch >= 1.0</strong>
                </div>
                <p className="pt-3">
                  Make sure you have <a href="https://pytorch.org/get-started/locally/">PyTorch installed</a> (at least version 1.0.0). Then,
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
            <div className="col-12 col-sm-6 col-md-4 offset-md-2 text-center">
              <h2 className="display-5">Examples</h2>
              <div className="pt-2">
                <FontAwesomeIcon icon={faFileCode} size="4x" title="Examples" className="align-middle d-inline-block" />
              </div>
              <div className="pt-3 mb-4">
                <a href="https://gpytorch.readthedocs.io/" role="button" className="btn btn-outline-info">Browse Examples</a>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <h2 className="display-5">Documentation</h2>
              <div className="pt-2">
                <FontAwesomeIcon icon={faBook} size="4x" title="Docs" className="align-middle d-inline-block" />
              </div>
              <div className="pt-3 mb-4">
                <a href="https://gpytorch.readthedocs.io/" role="button" className="btn btn-outline-info">Browse Docs</a>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12 text-center">
              <p>
                To learn about GPyTorch's inference engine, please refer to our NeurIPS 2018 paper:
                <br/>
                <a href="https://arxiv.org/pdf/1809.11165.pdf" target="_blank" rel="noopener noreferrer">
                  GPyTorch: Blackbox Matrix-Matrix Gaussian Process Inference with GPU Acceleration
                </a>
              </p>
            </div>
            <div className="col-12 text-center">
              <a href="https://arxiv.org/abs/1809.11165" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-outline-info mr-2">
                ArXiV
              </a>
              <a href="https://scholar.googleusercontent.com/scholar.bib?q=info:Zow5BNdwWNsJ:scholar.google.com/&output=citation&scisig=AAGBfm0AAAAAXBFijM6JsAYNQAEhIIQK_JU6itiRmXAj&scisf=4&ct=citation&cd=-1&hl=en&scfhb=1" target="_blank" rel="noopener noreferrer" role="button" className="btn btn-outline-info ml-2">
                BibTeX
              </a>
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
                  <TeamMember name="Max Balandat" href="https://research.fb.com/people/balandat-max/" img={max} />
                </ul>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 col-md-8 offset-md-2">
                <p className="text-center">
                  <strong>With (many) contributions from:</strong>
                  &nbsp;
                  David Arbour,
                  Eytan Bakshy,
                  Karthik Rajkumar,
                  Sam Stanton,
                  Ruihan Wu,
                  Bram Wallace,
                  Ke Alexander Wang,
                  Jared Frank,
                  and others!
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-8 offset-md-2 text-center">
                <figure>
                  <figcaption className="figure-caption">Developed at Cornell University, Columbia University, University of Pennsylvania, New York University, and Facebook, with funding from the <a href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer">Bill and Melinda Gates Foundation</a>, the <a href="https://www.nsf.gov/" target="_blank" rel="noopener noreferrer">National Science Foundation</a>, and <a href="https://www.sap.com/index.html" target="_blank" rel="noopener noreferrer">SAP</a>.</figcaption>
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