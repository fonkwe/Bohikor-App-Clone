import React from 'react';


const FAQs = () => {
    return (
        <div className="container-faq">
          <h1 id="h1">FAQS</h1>
          <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

           <div class="card">
            <div class="card-header" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
            <h5 class="mb-0">
                What is the Bohikor score? <i class="fas fa-angle-down rotate-icon"></i>
            </h5>
             </a>
      </div>

      
      <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
           data-parent="#accordionEx">
        <div class="card-body">
            The Bohikor score is a measure of how well you manage your money. It takes into account the percentage you spend on each category of expenses, how frequently you save, how constant you are in meeting your savings goals, 
            and what you put aside for your retirements and how well you invest your money.
        </div>
      </div>

    </div>
   
    <div class="card">
      <div class="card-header" role="tab" id="headingTwo2">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
           aria-expanded="false" aria-controls="collapseTwo2">
          <h5 class="mb-0">
            How do I change the language of the app? <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
      <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
           data-parent="#accordionEx">
        <div class="card-body">
            The functionality to change language is not yet available in the app but will be in subsequent updates.

        </div>
      </div>

    </div>



    </div>
    
     <div class="card">
        <div class="card-header" role="tab" id="headingTwo2">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
             aria-expanded="false" aria-controls="collapseTwo2">
            <h5 class="mb-0">
                How can i improve my score? <i class="fas fa-angle-down rotate-icon"></i>
            </h5>
          </a>
        </div>

        <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
             data-parent="#accordionEx">
          <div class="card-body">
            Plan your money before you spend it. Set your budget limits and make sure you beat them.
            Save at least 30% of your income monthly.
            Record your daily expenses regularly as you spend.
          </div>
      </div>
      
    <div class="card">

        <div class="card-header" role="tab" id="headingTwo2">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
             aria-expanded="false" aria-controls="collapseTwo2">
            <h5 class="mb-0">
                Why can I not stick to my budget? <i class="fas fa-angle-down rotate-icon"></i>
            </h5>
          </a>
        </div>
        <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
             data-parent="#accordionEx">
          <div class="card-body">
            There are many possible reasons as to why and a wide variety of approaches to make and stick to realistic budgets. Follow the articles on our fireside blog to get more on this.
  
          </div>
        </div>
  
      </div>
  
  
  
      </div>
      
    <div class="card">

        <div class="card-header" role="tab" id="headingTwo2">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
             aria-expanded="false" aria-controls="collapseTwo2">
            <h5 class="mb-0">
                Do I have to input every franc I spend? <i class="fas fa-angle-down rotate-icon"></i>
            </h5>
          </a>
        </div>
  
        <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
             data-parent="#accordionEx">
          <div class="card-body">
            Yes you have to, it is very important to input every franc you spend so that the reports the app gives you about your financial health will be accurate and truthful.
  
          </div>
        </div>
  
      </div>
      
    <div class="card">

      
        <div class="card-header" role="tab" id="headingTwo2">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
             aria-expanded="false" aria-controls="collapseTwo2">
            <h5 class="mb-0">
                Can I set the budget for more than a month? <i class="fas fa-angle-down rotate-icon"></i>
            </h5>
          </a>
        </div>
        <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
             data-parent="#accordionEx">
          <div class="card-body">
            For now you cannot set budgets for more than a month. Budgets run monthly and they expire at the end of the month.
  
          </div>
        </div>
  
      </div>
      
  
  </div>           
        
  );
};
export default FAQs;