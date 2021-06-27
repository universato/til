use std::time::{Instant};
// use Num::divisors;
mod divisors;

fn main() {
    let n: u128 = 934832147123321;
    println!("finding divisors of {}", n);
    let start_time = Instant::now();
    let v = divisors::get_divisors(n);
    println!("time = {:?}, divisors = {:?}", start_time.elapsed(), v);
}
