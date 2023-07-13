import React from 'react';



const Codetabs = ({children}: any) => {

  // Best practice: Use the React.Children API when manipulating the children prop.
  return <section>
    <div>
    {/* TODO: Create tabs{React.Children.map(children, (child: any) => {
      return <TODO: Tab Selector />
        })} */}
    </div>
    {React.Children.map(children, (child: any) => {
      return child  
    })}
  </section>
}

export default Codetabs;