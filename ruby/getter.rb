# frozen_string_literal: true

# Object
class Object
  def self.getter(*names)
    names.each { |name| class_eval("def #{name}; @#{name} end", __FILE__, __LINE__) }
  end

  def self.setter(*names)
    names.each { |name| class_eval("def #{name}=t; @#{name} = t end", __FILE__, __LINE__) }
  end
end

# Point
class Point
  def initialize(x, y)
    @x = x
    @y = y
  end
  getter :x, :y
  setter :x, :y
end

a = Point.new(0, 0)
a.x =(5)
p a.x
p a.y
p a.x = 1, 2, 3
p a.x
