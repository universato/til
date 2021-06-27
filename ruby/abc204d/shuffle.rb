n = gets.to_s.to_i
times = gets.to_s.split.map{ |e| e.to_i }.sort

x = 250_000

ans = 1000 * n
x.times do
  s = times.shuffle

  a = b = 0
  s.each do |t|
    a < b ? a += t : b += t
  end

  tmp = [a, b].max
  ans = tmp if ans > tmp
end

puts ans
