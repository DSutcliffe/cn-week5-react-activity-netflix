import React from 'react';
import './css/App.css';

import Faqs from './components/Faqs.js';
import Trial from './components/Trial.js';

function App() {
  return (
    <div>
      
      <div class="headerSection">
        <h1>Frequently Asked Questions</h1>
      </div>
      
      <div class="faqSection">
        <Faqs faq="What is Netflix?" />
        <Faqs faq="How much does Netflix cost?" />
        <Faqs faq="Where can I watch?" />
        <Faqs faq="How do I Cancel?" />
        <Faqs faq="What can I watch on Netflix?" />
        <Faqs faq="How does the free trial work?" />
      </div>

      <div class="trialSection">
        <Trial trialP="TRY 30 DAYS FREE >" />
      </div>
      
    </div>
  );
}

export default App;