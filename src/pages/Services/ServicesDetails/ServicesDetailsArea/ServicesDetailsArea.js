import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';

const ServicesDetailsArea = (id) => {

   console.log('id', id)


   const renderTitle = () => {
      switch (id.id) {
         case '1':
            return <div className="row">
               <h2>Թերապևտիկ</h2>
            </div>
         case '2':
            return <div className="row">
               <h2>Մանկական</h2>
            </div>
         case '3':
            return <div className="row">
               <h2>Նեղ մասնագիտական բաժանմունք</h2>
            </div>
         case '4':
            return <div className="row">
               <h2>Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք</h2>
            </div>
         default:
            return <div>Value not between 1 and 4</div>;
      }
   };
   const renderContent = () => {
      switch (id.id) {
         case '1':
            return <div className="row">
               <HomeSingleTeam imgUrl='../img/doctors/1.jpg' image="1" title="Ադամյան" />
               <HomeSingleTeam imgUrl='../img/doctors/2.jpg' image="2" title="Ասոյան-մաշկաբան" />
               <HomeSingleTeam image="3" title="Աստղիկ Դավթյան" />

            </div>
         case '2':
            return <div className='row'>Մանկականi bjsishkner</div>;
         case '3':
            return <div className='row'>Նեղ մասնագիտական բաժանմունք i bjishkner</div>;
         case '4':
            return <div className='row'>Լաբորատոր-գործիքային ախտորոշիչ բաժանմունք i bjsihner</div>;
         default:
            return <div className='row'>Value not between 1 and 4</div>;
      }
   };
   return (
      <>
         <section className="team-area pt-115 pb-55">
            <div className="container">
               {renderTitle()}
               {renderContent()}
            </div>
         </section>
      </>
   );
};

export default ServicesDetailsArea;