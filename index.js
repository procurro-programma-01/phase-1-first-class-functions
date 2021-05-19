function spy(){

}
function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    let fn = function(){
        }
        return fn;
    }

    function returnsAnAnonymousFunction(){
        
        return function(){

        }
    }
