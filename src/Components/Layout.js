import React from 'react'

//Components
import Sidebar from './Sidebar';
import Types from './Types';
import Paginated from './Paginated';
import CollectionCard from './CollectionCard';



const Layout = () => {
    return (
        <div className="container">
            {/* Part-1 */}

            <div className="left-side">
              <Sidebar />
            </div>

            {/* Part-2 */}
            <div className="right-side">

                {/* Part-2-top */}
                <div className="top-main">
                    <div className="TypesBox">
                       <Types />
                    </div>
                    <div className="PaginationBox">
                     <Paginated />
                    </div>
                </div>

                {/* Part-2-Bottom */}

                <div className="top-bottom">
                    <CollectionCard />
                </div>
            </div>       
        </div>
    )
}



export default Layout
