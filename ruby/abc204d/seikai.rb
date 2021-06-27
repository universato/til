n = gets.to_s.to_i
a = gets.to_s.split.map{ |e| e.to_i }

max = a.sum
dp = [true] + [false] * max
a.each do |x|
  (0..max - x).reverse_each do |i|
    dp[i + x] = true if dp[i]
  end
end
x = (0..max).select { |x| dp[x] }.min_by { |x|
  [x, max - x].max
}

puts [x, max - x]
