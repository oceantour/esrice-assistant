
# TypeScript 与 C# 语法对比指南

基于你已有的 C# 和 JavaScript 知识，我将 TypeScript 中与 C# 使用方法一致的关键词进行对比整理，帮助你快速掌握 TypeScript。

## 🎯 核心语法对比

### 1. 类型系统关键词

| C# 语法 | TypeScript 语法 | 说明 |
|---------|----------------|------|
| `string name = "John";` | `let name: string = "John";` | 字符串类型 |
| `int age = 25;` | `let age: number = 25;` | 数值类型 |
| `bool isActive = true;` | `let isActive: boolean = true;` | 布尔类型 |
| `object person = new Person();` | `let person: object = {};` | 对象类型 |
| `var list = new List<string>();` | `let list: Array<string> = [];` | 泛型数组 |
| `string[] names = new string[] {};` | `let names: string[] = [];` | 数组类型 |

### 2. 类与面向对象

| 概念 | C# | TypeScript | 相似度 |
|------|----|------------|---------|
| **类定义** | `public class Person { }` | `class Person { }` | ⭐⭐⭐⭐⭐ |
| **构造函数** | `public Person(string name) { }` | `constructor(name: string) { }` | ⭐⭐⭐⭐ |
| **属性** | `public string Name { get; set; }` | `name: string;` | ⭐⭐⭐ |
| **方法** | `public void Speak() { }` | `speak(): void { }` | ⭐⭐⭐⭐⭐ |
| **继承** | `class Student : Person { }` | `class Student extends Person { }` | ⭐⭐⭐⭐ |
| **接口实现** | `class MyClass : IInterface { }` | `class MyClass implements IInterface { }` | ⭐⭐⭐⭐⭐ |
| **抽象类** | `abstract class Animal { }` | `abstract class Animal { }` | ⭐⭐⭐⭐⭐ |
| **访问修饰符** | `public, private, protected` | `public, private, protected` | ⭐⭐⭐⭐⭐ |
| **静态成员** | `public static int Count;` | `static count: number;` | ⭐⭐⭐⭐⭐ |
| **只读属性** | `public readonly string Id;` | `readonly id: string;` | ⭐⭐⭐⭐⭐ |

### 3. 接口与类型

| C# | TypeScript | 说明 |
|----|------------|------|
| `interface IPerson { string Name { get; set; } }` | `interface IPerson { name: string; }` | 接口定义 |
| `interface IRepository<T> { T GetById(int id); }` | `interface IRepository<T> { getById(id: number): T; }` | 泛型接口 |
| `delegate void MyDelegate(string msg);` | `type MyDelegate = (msg: string) => void;` | 委托/函数类型 |

### 4. 泛型

| C# | TypeScript | 说明 |
|----|------------|------|
| `class List<T> { }` | `class List<T> { }` | 泛型类 |
| `T Method<T>(T param) { }` | `function method<T>(param: T): T { }` | 泛型方法 |
| `where T : class` | `<T extends object>` | 泛型约束 |

### 5. 异步编程

| C# | TypeScript | 说明 |
|----|------------|------|
| `async Task<string> GetDataAsync() { }` | `async function getData(): Promise<string> { }` | 异步方法 |
| `await httpClient.GetAsync(url);` | `await fetch(url);` | await 表达式 |
| `Task.WhenAll(tasks)` | `Promise.all(promises)` | 并行执行 |

## 📚 详细语法对比示例

### 类与继承
```csharp
// C#
public class Person 
{
    private string _name;
    public string Name 
    { 
        get => _name; 
        set => _name = value; 
    }
    
    public Person(string name) 
    {
        _name = name;
    }
    
    public virtual void Speak() 
    {
        Console.WriteLine($"Hello, I'm {_name}");
    }
}

public class Student : Person 
{
    public Student(string name) : base(name) { }
    
    public override void Speak() 
    {
        Console.WriteLine($"I'm student {Name}");
    }
}
```

```typescript
// TypeScript
class Person {
    private _name: string;
    
    get name(): string {
        return this._name;
    }
    
    set name(value: string) {
        this._name = value;
    }
    
    constructor(name: string) {
        this._name = name;
    }
    
    speak(): void {
        console.log(`Hello, I'm ${this._name}`);
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }
    
    override speak(): void {
        console.log(`I'm student ${this.name}`);
    }
}
```

### 接口与实现
```csharp
// C#
public interface IRepository<T> 
{
    T GetById(int id);
    void Save(T entity);
}

public class UserRepository : IRepository<User> 
{
    public User GetById(int id) 
    {
        // 实现
    }
    
    public void Save(User entity) 
    {
        // 实现
    }
}
```

```typescript
// TypeScript
interface IRepository<T> {
    getById(id: number): T;
    save(entity: T): void;
}

class UserRepository implements IRepository<User> {
    getById(id: number): User {
        // 实现
    }
    
    save(entity: User): void {
        // 实现
    }
}
```

### 泛型使用
```csharp
// C#
public class Response<T> 
{
    public bool Success { get; set; }
    public T Data { get; set; }
    public string Message { get; set; }
}

public T Parse<T>(string json) where T : class 
{
    return JsonSerializer.Deserialize<T>(json);
}
```

```typescript
// TypeScript
class Response<T> {
    success: boolean;
    data: T;
    message: string;
}

function parse<T extends object>(json: string): T {
    return JSON.parse(json) as T;
}
```

## 🔄 主要差异点

### 1. 类型声明位置
- **C#**: 类型在变量名之前 `string name = "John";`
- **TypeScript**: 类型在变量名之后 `let name: string = "John";`

### 2. 空值处理
- **C#**: `string? nullableString = null;`
- **TypeScript**: `let nullableString: string | null = null;`

### 3. 属性语法
- **C#**: 完整的 getter/setter 语法
- **TypeScript**: 更简洁的属性声明，或使用 get/set 访问器

### 4. 事件系统
- **C#**: 内置的事件机制 `event EventHandler MyEvent;`
- **TypeScript**: 需要手动实现或使用第三方库

## 💡 学习建议

1. **重点关注相似点**：利用你已有的 C# 面向对象知识
2. **注意语法差异**：特别是类型声明的位置和方式
3. **练习类型推导**：TypeScript 有更强的类型推导能力
4. **掌握联合类型**：这是 TypeScript 特有的强大功能

## 🚀 快速上手技巧

- 从简单的类定义开始，逐步添加类型注解
- 利用接口来定义契约，就像在 C# 中一样
- 泛型的使用方式几乎与 C# 相同
- 异步编程模式非常相似

这个对比应该能帮助你快速将 C# 知识迁移到 TypeScript，让你在 VSCode 插件开发中更加得心应手！