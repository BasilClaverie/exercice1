//fonction adder v1
function adder(l, r){
	return function(v){
		return l(v) + r(v);
	}
}

//fonction mult
function mult(v){
	return function(e){
		return v*e;
	}
}

//test adder
adder(mult(2), mult(4))(2); // 12

//fonction sub
function sub(v){
	return function(e){
		return v-e;
	}
}

//test sub
sub(0)(0); // 0
sub(2)(1); // 1
sub(2)(2); // 0
sub(2)(4); // -2


//adder v2
function adder(){
    var args = Array.prototype.slice.call(arguments);
    return function(v){
        var res=0;
        args.forEach(function(val){
            res+=val(v);
        });
        return res;
    }
}

//test adder v2

adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5
