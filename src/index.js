import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Quiz from './components/Quiz.jsx';

// ========================================

ReactDOM.render(
	<React.StrictMode>
		<Quiz />
  	</React.StrictMode>,
  document.getElementById('root')
);
