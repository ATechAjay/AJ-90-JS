# History about internet

It began in the `1960s` as a `US-army-funded research project`, then evolved into a public infrastructure in the `1980s` with the support of many public universities and private companies.

The various technologies that support the Internet have evolved over time, but the way it works hasn't changed that much.

Internet is a way to `connect computers all together` and ensure that, whatever happens, they find a way to stay connected.

# A simple network

![Two computer network](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-1.png)

When two computers need to communicate with each other, you have to link them, either physically (usually with an Ethernet cable) or wirelessly (for example with Wi-Fi or Bluetooth systems).

All modern computers can support any of those above connections. Such a network is not limited to two computers. You can connect as many computers as you wish.

But it gets complicated quickly. If you're trying to connect, say, ten computers, you need 45 cables, with 9 plugs per computer!

![computer connected with each other](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-2.png)

# Router

To solve the above more cables problem, each computer on a network is connected to a special `tiny computer called a router`.

![computer connected via routers](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-3.png)

This router has only one job: like a signaler at a railway station, it makes sure that a message sent from a given computer arrives at the right destination computer.

To send a message to computer `B`, computer `A` must send the message to the router, which in turn forwards the message to computer `B` and makes sure the message is not delivered to computer `C`.

Once we add a router to the system, our network of 10 computers only requires 10 cables. A single plug for each computer and a router with 10 plugs.

# A network of networks

So far so good. But what about connecting hundreds, thousands, billions of computers? Of course a single router can't scale that far, but, if you read carefully, we said that a router is a computer like any other, so what keeps us from connecting two routers together? Nothing, so let's do that.

![two routers are connected with each other](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-4.png)

By connecting computers to routers, then routers to routers, we are able to scale infinitely. Such a network comes very close to what we call the Internet.

![Multiple computers are connected with each other with the help of routers.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-5.png)

# How to connect with a desired computer

But we're missing something. We built that network for our own purposes. There are other networks out there: your friends, your neighbors, anyone can have their own network of computers.

But it's not really possible to set cables up between your house and the rest of the world, so how can you handle this?

Well, there are already cables linked to your house, for example, `electric power` and `telephone`. The telephone infrastructure already connects your house with anyone in the world so it is the perfect wire we need.

# Connect via modem

To connect our network to the telephone infrastructure, we need a special piece of equipment called a `modem`.

This modem turns the information from our network into information manageable by the telephone infrastructure and vice versa.

![Computer id connected with each other with a modem.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-6.png)

# Internet service provider (ISP)

So we are connected to the telephone infrastructure. The next step is to send the messages from our network to the network we want to reach.

To do that, we will connect our network to an `Internet Service Provider (ISP)`. An ISP is a company that manages some special routers that are all linked together and can also access other ISPs' routers.

![Multiple computers are connected with each other with the help of routers and ISPs.](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work/internet-schema-7.png)

So the message from our network is carried through the network of ISP networks to the destination network.

The Internet consists of this whole infrastructure of networks.

# How to find desired computer

If you want to send a message to a computer, you have to specify which one. Thus any computer linked to a network has a unique address that identifies it, called an `IP address`. Where IP stands for `Internet Protocol`.

It's an address made of a series of four numbers separated by dots, for example: 192.0.2.172.

That's perfectly fine for computers, but we human beings have a hard time remembering that sort of address.

To make things easier, we can alias an IP address with a human-readable name called a `domain name`. For example: `google.com` is the domain name used on top of the IP address `142.250.190.78`.

So using the domain name is the easiest way for us to reach a computer over the Internet.

# Internet VS web

As you might notice, when we browse the Web with a Web browser, we usually use the domain name to reach a website.

Does that mean the Internet and the Web are the same thing?

It's not that simple. As we saw, the `Internet is a technical infrastructure` which allows billions of computers to be connected all together.

Among those computers, some computers (called `Web servers`) can send messages intelligible to web browsers.

The `Internet is an infrastructure`, whereas the `Web is a service built on top of the infrastructure`.

It is worth noting there are several other services built on top of the Internet, such as email.

# Intranets and Extranets

`Intranets` are private networks that are restricted to members of a particular organization.

They are commonly used to provide a portal for members to securely access shared resources, collaborate and communicate. For example, an organization's intranet might host web pages for sharing department or team information, shared drives for managing key documents and files, portals for performing business administration tasks, and collaboration tools like wikis, discussion boards, and messaging systems.

`Extranets` are very similar to Intranets, except they open all or part of a private network to allow sharing and collaboration with other organizations.

They are typically used to safely and securely share information with clients and stakeholders who work closely with a business.

Often their functions are similar to those provided by an intranet: information and file sharing, collaboration tools, discussion boards, etc.

Both intranets and extranets run on the same kind of infrastructure as the Internet, and use the same protocols. They can therefore be accessed by authorized members from different physical locations.

# Summary

The Internet is the backbone of the Web, the technical infrastructure that makes the Web possible. At its most basic, the Internet is a large network of computers which communicate all together.
