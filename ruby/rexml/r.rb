def load?(gem)
  begin
    require gem
    puts gem + " is OK"
  rescue LoadError
    puts gem + " is NG"
  end
end

puts "RUBY_VERSION: " + RUBY_VERSION
puts "RUBY_PLATFORM: " + RUBY_PLATFORM
puts "RUBY_ENGINE: " + RUBY_ENGINE
load?("rexml")
load?("rake")
load?("sample_gem")
# load?("sample_gem27")
load?("minitest")

p REXML::VERSION
p SampleGem::VERSION

__END__
require 'minitest'
require 'rake'
require 'sample_gem27'
require 'sample_gem'
