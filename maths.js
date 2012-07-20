// random number over standard deviation
function rnd_snd() {
    return (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
}
// random number from mean w/ standard deviation (uses above)
function rnd(mean, stdev) {
    return Math.round(rnd_snd() * stdev + mean);
}
// is number a prime number
function isprime(num) {
    // now let's see if it's prime.
    // set a little boolean flag saying if num is prime. we'll set it to true, 
    // then we'll set it to false only if we manage to find a factor other than 1 or num
    var prime = true;
    // first check for 1 or 2 or 3. that's easy.
    if (num == 1 || num == 2 || num == 3) {
        prime = true; // this line is redundant
    } else {
        // it's not a 1 or a 2 or a 3. So now we need to do some looping...
        // loop i from 2 to num/2 (rounded up), check if num is divisible by i
        // we only need to loop to num/2, since no factors will be larger than that
        for (var i = 2; i <= Math.ceil(num / 2); i++) {
            if (num % i == 0) {
                prime = false;
                break; // stop when we find a factor
            }
        }
    }
    return prime;
}