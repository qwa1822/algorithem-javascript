class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
}

SinglyLinkedList.prototype.find = function (targetValue) {
  let currNode = this.head;
  let findNode = null;
  while (currNode !== null) {
    if (currNode.value === targetValue) {
      findNode = currNode;
    }
    currNode = currNode.next;
  }
  // 값이 중복일 경우??? 일단 중복은 없다고 생각함...
  return findNode;
};

SinglyLinkedList.prototype.append = function (newValue) {
  const newNode = new Node(newValue);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.count += 1;
};

SinglyLinkedList.prototype.insert = function (targetValue, newValue) {
  const targetNode = this.find(targetValue);
  if (targetNode === null) {
    console.log("insert fail...");
  } else {
    const newNode = new Node(newValue);
    newNode.next = targetNode.next;
    targetNode.next = newNode;
    this.count += 1;
  }
};

SinglyLinkedList.prototype.remove = function (targetValue) {
  // 값을 기준으로 리스트를 순회.
  // 리스트의 마지막 노드일 경우 -> 선택 노드의 앞 노드의 next를 null로 변경
  // 리스트의 처음 노드일 경우 -> 헤드 포인터 변경
  // 리스트의 중간 노드일 경우 -> 선택 노드의 앞 노드의 next를 선택 노드의 next로 변경
  // 리스트에 없는 값을 삭제하려고 할 경우. -> find함수 사용 find 함수의 시간복잡도를 생각하면 그리 좋은 방법은 아님...

  if (this.find(targetValue) === null) {
    console.log("remove fail...");
  } else {
    let currNode = this.head;
    if (currNode.value === targetValue) {
      this.head = currNode.next;
      this.count -= 1;
    } else {
      while (currNode.next.value !== targetValue) {
        currNode = currNode.next;
      }
      if (currNode.next !== null) {
        currNode.next = currNode.next.next;
        this.count -= 1;
      }
    }
  }
};

SinglyLinkedList.prototype.display = function () {
  let currNode = this.head;
  let displyString = "[";
  while (currNode !== null) {
    let addString = `${currNode.value}`;
    if (currNode.next !== null) {
      addString += `, `;
    }
    displyString += addString;
    currNode = currNode.next;
  }
  displyString += "]";
  console.log(displyString);
};

SinglyLinkedList.prototype.size = function () {
  console.log(this.count);
};

const linkedList = new SinglyLinkedList();
const linkedList2 = new SinglyLinkedList();
const linkedList3 = new SinglyLinkedList();
const linkedList4 = new SinglyLinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList2.append(1);
linkedList2.append(2);
linkedList2.append(3);
linkedList2.append(4);

linkedList3.append(1);
linkedList3.append(2);
linkedList3.append(3);
linkedList3.append(4);

linkedList4.append(1);
linkedList4.append(2);
linkedList4.append(3);
linkedList4.append(4);

console.log(linkedList, linkedList2, linkedList3, linkedList4);
linkedList.display();
linkedList2.display();
linkedList3.display();
linkedList4.display();