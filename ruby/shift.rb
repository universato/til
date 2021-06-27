# require './dump'

# a = [10] * 100

# a.shift
# a[0] = 0
# a.shift
# a[0] = 0

# p a[0, 10]

# require "benchmark"

# Benchmark.bmbm do |j|
#   j.report(""){  }
#   j.report(""){  }
# end

a = [0] * 100_000_000
b = a.shift(20)
# a.shift(10)
# c = a[0, 100]
# a.unshift
a.shift
a.shift
a[2] = 1
# b[1] = 1
a.shift
a[0] = 0
# a[100_000_009] = 0
p a.size
# b[0, 2]

p "end"
